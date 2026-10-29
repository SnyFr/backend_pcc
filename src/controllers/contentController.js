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
    const userId = req.user.id;
    const { status, channel_id, format_type } = req.query;

    const whereClause = { user_id: userId };
    if (status) whereClause.status = status;
    if (channel_id) whereClause.channel_id = Number(channel_id);
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
      },
      orderBy: { created_at: "desc" },
    });

    return sendResponse(res, 200, true, "Contents retrieved successfully", contents);
  } catch (error) {
    next(error);
  }
};

// 2. GET /api/v1/contents/:id
export const getContentById = async (req, res, next) => {
  try {
    const userId = req.user.id;
    const contentId = Number(req.params.id);

    const content = await prisma.content.findFirst({
      where: {
        id: contentId,
        user_id: userId,
      },
      include: {
        channel: {
          select: {
            platform: true,
            handle_name: true,
          },
        },
        content_checklists: {
          orderBy: { id: "asc" },
        },
        content_metrics: {
          orderBy: { recorded_at: "desc" },
        },
      },
    });

    if (!content) {
      return sendResponse(res, 404, false, "Content not found");
    }

    const { channel, content_checklists, content_metrics, ...otherList } = content;

    return sendResponse(res, 200, true, "Content detail retrieved successfully", {
      ...otherList,
      channel_platform: channel.platform,
      channel_handle: channel.handle_name,
      checklists: content_checklists,
      metrics: content_metrics,
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
    } = req.body;

    // Cek kepemilikan channel
    const channel = await prisma.channel.findFirst({
      where: { id: Number(channel_id), user_id: userId },
    });

    if (!channel) {
      return sendResponse(res, 400, false, "Channel not found or does not belong to user");
    }

    // Insert ke database
    const newContent = await prisma.content.create({
      data: {
        user_id: userId,
        channel_id: Number(channel_id),
        title,
        description: description || null,
        script_draft: script_draft || null,
        format_type,
        status,
        priority,
        scheduled_date: scheduled_date ? new Date(scheduled_date) : null,
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
    const userId = req.user.id;
    const contentId = req.params.id;
    const { role } = req.user;

    const currentContent = await prisma.content.findFirst({
      where: { id: contentId, user_id: userId },
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
    } = req.body;
    
    // Aturan bisnis Role Editor
    if (role === "editor") {
      if (status !== "review" || currentContent.status !== "editing") {
        return sendResponse(
          res,
          403,
          false,
          "Editors can only submit reviews while in edit mode"
        );
      }
    }

    // Cek channel_id jika diupdate
    if (channel_id !== undefined && channel_id !== currentContent.channel_id) {
      const channel = await prisma.channel.findFirst({
        where: { id: Number(channel_id), user_id: userId },
      });
      if (!channel) {
        return sendResponse(res, 400, false, "Channel not found or does not belong to user");
      }
    }

    const targetStatus = status !== undefined ? status : currentContent.status;
    let newPublishedDate = published_date !== undefined ? published_date : currentContent.published_date;

    if (targetStatus === "published" && !newPublishedDate) {
      newPublishedDate = new Date();
    }

    const updatedContent = await prisma.content.update({
      where: { id: contentId },
      data: {
        channel_id: channel_id !== undefined ? Number(channel_id) : undefined,
        title,
        description,
        script_draft,
        format_type,
        status: targetStatus,
        priority,
        scheduled_date: scheduled_date ? new Date(scheduled_date) : undefined,
        published_date: newPublishedDate ? new Date(newPublishedDate) : undefined,
        published_url,
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
    const userId = req.user.id;
    const contentId = req.params.id;

    const content = await prisma.content.findFirst({
      where: { id: contentId, user_id: userId },
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