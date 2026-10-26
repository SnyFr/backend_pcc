import pool from "../config/db.js";
import sendResponse from "../utils/response.js";

export const switchRole = async (req, res, next) => {
  try {
    const userId = req.user.id;
    const { target_role } = req.body;

    if (!target_role || typeof target_role !== "string") {
      return sendResponse(res, 400, false, "Target role is required");
    }

    const cleanRole = target_role.trim().toLowerCase();

    if (cleanRole === "admin") {
      return sendResponse(
        res,
        403,
        false,
        "You are not allowed to switch role to Admin"
      );
    }

    if (!["creator", "editor"].includes(cleanRole)) {
      return sendResponse(
        res,
        400,
        false,
        "Invalid target role. Allowed values: creator, editor"
      );
    }

    await pool.execute("UPDATE users SET role = ? WHERE id = ?", [
      cleanRole,
      userId,
    ]);

    const [users] = await pool.execute(
      "SELECT id, name, email, role, created_at FROM users WHERE id = ?",
      [userId]
    );

    return sendResponse(
      res,
      200,
      true,
      `Successfully switched role to ${cleanRole}`,
      users[0]
    );
  } catch (error) {
    next(error);
  }
};