import sendResponse from "../utils/response.js";
import prisma from "../config/prisma.js";

export const getChannels = async (req, res, next) => {
  try {
    const { user_id: filterUserId } = req.query;

    const whereClause = {};

    // Opsi filter channel milik user spesifik jika dikirim via query param
    if (filterUserId) whereClause.user_id = filterUserId;

    const channels = await prisma.channel.findMany({
      where: whereClause,
      orderBy: { created_at: "desc" },
    });

    return sendResponse(res, 200, true, "Channels retrieved successfully", channels);
  } catch (error) {
    next(error);
  }
};

export const createChannel = async (req, res, next) => {
  try {
    const userId = req.user.id;
    const { platform, handle_name } = req.body;

    const newChannel = await prisma.channel.create({
      data: {
        user_id: userId,
        platform,
        handle_name,
      },
    });

    return sendResponse(res, 201, true, "Channel created successfully!", {
      ...newChannel,
      id: Number(newChannel.id),
      user_id: Number(newChannel.user_id)
    })
  } catch (error) {
    next(error);
  }
};