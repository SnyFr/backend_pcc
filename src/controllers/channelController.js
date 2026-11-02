import prisma from "../config/prisma.js";
import sendResponse from "../utils/response.js";

// 1. GET ALL CHANNELS
export const getChannels = async (req, res, next) => {
  try {
    const { id: userId, role } = req.user;
    const { user_id: filterUserId } = req.query;

    const whereClause = {}; 

    // Creator HANYA bisa lihat channel miliknya
    if (role === "creator") {
      whereClause.user_id = userId;
    } else if (filterUserId) {
      // Admin & Editor bisa lihat semua / filter per user
      whereClause.user_id = filterUserId;
    }

    const channels = await prisma.channel.findMany({
      where: whereClause,
      include: {
        user: { select: { id: true, name: true, email: true } },
      },
      orderBy: { created_at: "desc" },
    });

    return sendResponse(res, 200, true, "Channels retrieved successfully", channels);
  } catch (error) {
    next(error);
  }
};

// 2. GET CHANNEL BY ID
export const getChannelById = async (req, res, next) => {
  try {
    const { id: userId, role } = req.user;
    const channelId = Number(req.params.id);

    const channel = await prisma.channel.findUnique({
      where: { id: channelId },
      include: {
        user: { select: { id: true, name: true, email: true } },
      },
    });

    if (!channel) {
      return sendResponse(res, 404, false, "Channel not found");
    }

    // Creator dilarang ngintip channel creator lain
    if (role === "creator" && channel.user_id !== userId) {
      return sendResponse(res, 403, false, "Forbidden: You cannot access other creator's channel");
    }

    return sendResponse(res, 200, true, "Channel retrieved successfully", channel);
  } catch (error) {
    next(error);
  }
};

// 3. CREATE CHANNEL
export const createChannel = async (req, res, next) => {
  try {
    const { id: userId, role } = req.user;

    // Editor gak boleh buat channel
    if (role === "editor") {
      return sendResponse(res, 403, false, "Forbidden: Editors are not allowed to create channels");
    }

    // Body sudah ter-validasi otomatis dari middleware
    const { platform, handle_name, user_id: bodyUserId } = req.body;
    const targetUserId = role === "admin" && bodyUserId ? bodyUserId : userId;

    const newChannel = await prisma.channel.create({
      data: {
        user_id: targetUserId,
        platform,
        handle_name,
      },
    });

    return sendResponse(res, 201, true, "Channel created successfully", newChannel);
  } catch (error) {
    next(error);
  }
};

// 4. UPDATE CHANNEL
export const updateChannel = async (req, res, next) => {
  try {
    const { id: userId, role } = req.user;
    const channelId = Number(req.params.id);

    if (role === "editor") {
      return sendResponse(res, 403, false, "Forbidden: Editors are not allowed to update channels");
    }

    const existingChannel = await prisma.channel.findUnique({
      where: { id: channelId },
    });

    if (!existingChannel) {
      return sendResponse(res, 404, false, "Channel not found");
    }

    if (role === "creator" && existingChannel.user_id !== userId) {
      return sendResponse(res, 403, false, "Forbidden: You can only update your own channel");
    }

    const { platform, handle_name } = req.body;

    const updatedChannel = await prisma.channel.update({
      where: { id: channelId },
      data: {
        ...(platform && { platform }),
        ...(handle_name && { handle_name }),
      },
    });

    return sendResponse(res, 200, true, "Channel updated successfully", updatedChannel);
  } catch (error) {
    next(error);
  }
};

// 5. DELETE CHANNEL
export const deleteChannel = async (req, res, next) => {
  try {
    const { id: userId, role } = req.user;
    const channelId = Number(req.params.id);

    if (role === "editor") {
      return sendResponse(res, 403, false, "Forbidden: Editors are not allowed to delete channels");
    }

    const existingChannel = await prisma.channel.findUnique({
      where: { id: channelId },
    });

    if (!existingChannel) {
      return sendResponse(res, 404, false, "Channel not found");
    }

    if (role === "creator" && existingChannel.user_id !== userId) {
      return sendResponse(res, 403, false, "Forbidden: You can only delete your own channel");
    }

    await prisma.channel.delete({
      where: { id: channelId },
    });

    return sendResponse(res, 200, true, "Channel deleted successfully", null);
  } catch (error) {
    next(error);
  }
};