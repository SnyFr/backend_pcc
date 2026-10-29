import pool from "../config/db.js";
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

    return sendResponse(res, 200, true, "Get Channels Success!!", channels);
  } catch (error) {
    next(error);
  }
};

export const createChannel = async (req, res, next) => {
  try {
    const userId = req.user.id;
    const { platform, handle_name } = req.body;

    const [result] = await pool.execute(
      "INSERT INTO channels (user_id, platform, handle_name) VALUES (?, ?, ?)",
      [userId, platform, handle_name]
    );

    return sendResponse(res, 201, true, "Channel created successfully!", {
      id: result.insertId,
      user_id: userId,
      platform,
      handle_name,
    });
  } catch (error) {
    next(error);
  }
};