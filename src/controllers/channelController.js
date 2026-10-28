import pool from "../config/db.js";
import sendResponse from "../utils/response.js";

export const getChannels = async (req, res, next) => {
  try {
    const userId = req.user.id;

    const [channels] = await pool.execute(
      "SELECT id, user_id, platform, handle_name, created_at FROM channels WHERE user_id = ? ORDER BY created_at DESC",
      [userId]
    );

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