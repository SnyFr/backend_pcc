import sendResponse from "../utils/response.js";
import prisma from "../config/prisma.js";

export const getChannels = async (req, res, next) => {
  try {
    const userId = req.user.id;

    const channels = await prisma.channel.findMany({
      where: { user_id: userId },
      select: {
        id: true,
        user_id: true,
        platform: true,
        handle_name: true,
        created_at: true,
      },
      orderBy: { created_at: "desc" },
    });

    const serializedChannels = channels.map(channel => ({
      ...channel,
      id: channel.id.toString(),
      user_id: channel.user_id ? channel.user_id.toString() : null,
    }));

    return sendResponse(res, 200, true, "Get Channels Success!!", serializedChannels);
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