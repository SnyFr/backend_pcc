import pool from "../config/db.js";
import sendResponse from "../utils/response.js";
import prisma from "../config/prisma.js";

// URL Validator Helper
const isValidUrl = (urlString) => {
  try {
    const parseURL = new URL(urlString);
    return parseURL.protocol === "http:" || parseURL.protocol === "https:";
  } catch {
    return false;
  }
};

// 1. GET /api/v1/contents (List konten dengan filter ?status=&channel_id=&format_type=)
export const getContents = async (req, res, next) => {
  try {
    const { id: userId, role } = req.user;
    const { status, channel_id, format_type, author_id } = req.query;

    const whereClause = {};

    // Creator hanya dapat melihat content miliknya sendiri.
    // Admin dan editor dapat melihat semua content atau memfilter berdasarkan author.
    if (role === "creator") {
      whereClause.user_id = BigInt(userId);
    } else if (author_id) {
      whereClause.user_id = BigInt(author_id);
    }

    if (status) whereClause.status = status;
    if (channel_id) whereClause.channel_id = BigInt(channel_id);
    if (format_type) whereClause.format_type = format_type;

    const contents = await prisma.content.findMany({
      where: whereClause,
      include: {
        channel: {
          select: {
            platform: true,
            handle_name: true,
          },
        },
        checklists: {
          orderBy: { created_at: "asc" },
        },
        metrics: {
          orderBy: { recorded_at: "desc" },
        },
      },
      orderBy: { created_at: "desc" },
    });

    const formattedContents = contents.map((c) => {
      const { channel, checklists, metrics, ...otherList } = c;
      return {
        ...otherList,
        channel_platform: channel.platform,
        channel_handle: channel.handle_name,
        checklists,
        metrics,
      };
    });

    return sendResponse(res, 200, true, "Contents retrieved successfully", formattedContents);
  } catch (error) {
    next(error);
  }
};

// 2. GET /api/v1/contents/:id
export const getContentById = async (req, res, next) => {
  try {
    const { id: userId, role } = req.user;
    const contentId = BigInt(req.params.id);

    const content = await prisma.content.findFirst({
      where: {
        id: contentId,
        ...(role === "creator" && { user_id: BigInt(userId) }),
      },
      include: {
        channel: {
          select: {
            platform: true,
            handle_name: true,
          },
        },
        checklists: {
          orderBy: { created_at: "asc" },
        },
        metrics: {
          orderBy: { recorded_at: "desc" },
        },
      },
    });

    if (!content) {
      return sendResponse(res, 404, false, "Content not found");
    }

    const { channel, checklists, metrics, ...otherList } = content;

    return sendResponse(res, 200, true, "Content detail retrieved successfully", {
      ...otherList,
      channel_platform: channel.platform,
      channel_handle: channel.handle_name,
      checklists,
      metrics,
    });
  } catch (error) {
    next(error);
  }
};

// 3. POST /api/v1/contents
export const createContent = async (req, res, next) => {
  try {
    const userId = req.user.id;
    const {
      channel_id,
      title,
      description,
      script_draft,
      format_type,
      status,
      priority,
      scheduled_date,
      recording_url,
    } = req.body;

    // Content harus dibuat pada channel milik akun yang sedang login.
    const channel = await prisma.channel.findFirst({
      where: { id: BigInt(channel_id), user_id: BigInt(userId) },
    });

    if (!channel) {
      return sendResponse(res, 400, false, "Channel not found or does not belong to user");
    }

    // Insert ke database
    const newContent = await prisma.content.create({
      data: {
        user_id: BigInt(userId),
        channel_id: BigInt(channel_id),
        title,
        description: description || null,
        script_draft: script_draft || null,
        format_type,
        status,
        priority,
        scheduled_date: scheduled_date ? new Date(scheduled_date) : null,
        recording_url: recording_url || null,
      },
    });

    return sendResponse(res, 201, true, "Content created successfully", newContent);
  } catch (error) {
    next(error);
  }
};

// 4. PUT / PATCH /api/v1/contents/:id
export const updateContent = async (req, res, next) => {
  try {
    const { id: userId, role } = req.user;
    const contentId = BigInt(req.params.id);

    // Creator hanya dapat mengakses konten miliknya, editor & admin dapat mengakses konten creator
    const currentContent = await prisma.content.findFirst({
      where: {
        id: contentId,
        ...(role === "creator" && { user_id: BigInt(userId) }),
      },
    });

    if (!currentContent) {
      return sendResponse(res, 404, false, "Content not found");
    }

    const {
      channel_id,
      title,
      description,
      script_draft,
      format_type,
      status,
      priority,
      scheduled_date,
      published_date,
      published_url,
      recording_url,
    } = req.body;
    
    // Aturan bisnis Role Editor
    if (role === "editor") {
      // Editor tidak boleh mengisi atau mengubah recording_url (hanya creator)
      if (recording_url !== undefined) {
        return sendResponse(
          res,
          403,
          false,
          "Forbidden: Editors are not allowed to modify recording URL (Read-only for editors)"
        );
      }

      // Editor tidak boleh mentransisikan status ke recording
      if (status === "recording") {
        return sendResponse(
          res,
          403,
          false,
          "Forbidden: Only creators can transition content to recording status"
        );
      }

      // console.log("Current Content Status:", currentContent.status);
      // Editor hanya boleh submit review saat konten sedang dalam status editing
      if (currentContent.status !== "editing") {
        return sendResponse(
          res,
          403,
          false,
          "Editors can only submit reviews while in editing status"
        );
      }
    }

    // Cek channel_id jika diupdate
    if (channel_id !== undefined && BigInt(channel_id) !== currentContent.channel_id) {
      const channel = await prisma.channel.findFirst({
        where: { id: BigInt(channel_id), user_id: currentContent.user_id },
      });
      if (!channel) {
        return sendResponse(res, 400, false, "Channel not found or does not belong to user");
      }
    }

    const targetStatus = status !== undefined ? status : currentContent.status;
    const targetRecordingUrl = recording_url !== undefined ? recording_url : currentContent.recording_url;

    if (targetStatus === "editing" && !targetRecordingUrl) {
      return sendResponse(res, 422, false, "Recording URL is required when status is changed to editing!");
    }

    let newPublishedDate = published_date !== undefined ? published_date : currentContent.published_date;

    if (targetStatus === "published" && !newPublishedDate) {
      newPublishedDate = new Date();
    }

    const updatedContent = await prisma.content.update({
      where: { id: contentId },
      data: {
        channel_id: channel_id !== undefined ? BigInt(channel_id) : undefined,
        title,
        description,
        script_draft,
        format_type,
        status: targetStatus,
        priority,
        scheduled_date: scheduled_date ? new Date(scheduled_date) : undefined,
        published_date: newPublishedDate ? new Date(newPublishedDate) : undefined,
        published_url,
        recording_url: role !== "editor" && recording_url !== undefined ? recording_url : undefined,
      },
    });

    return sendResponse(res, 200, true, "Content updated successfully", updatedContent);
  } catch (error) {
    next(error);
  }
};

// 5. DELETE /api/v1/contents/:id
export const deleteContent = async (req, res, next) => {
  try {
    const { id: userId, role } = req.user;
    const contentId = BigInt(req.params.id);

    const content = await prisma.content.findFirst({
      where: {
        id: contentId,
        ...(role === "creator" && { user_id: BigInt(userId) }),
      },
    });

    if (!content) {
      return sendResponse(res, 404, false, "Content not found");
    }

    await prisma.content.delete({
      where: { id: contentId },
    });

    return res.status(204).send();
  } catch (error) {
    next(error);
  }
};
