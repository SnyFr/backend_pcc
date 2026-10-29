import pool from "../config/db.js";
import prisma from "../config/prisma.js";
import sendResponse from "../utils/response.js";

export const updateRole = async (req, res, next) => {
  try {
    const targetUserId = Number(req.params.id);
    const { newRole } = req.body;
    const currentRole = req.user.role;

    if (newRole === "admin" && currentRole !== "admin") {
      return sendResponse(res, 403, false, "You do not have authority to become an admin");
    }

    if (currentRole === "creator" && newRole !== "editor") {
      return sendResponse(res, 403, false, "Creator can only be changed to editor");
    }

    if (currentRole === "editor" && newRole !== "creator") {
      return sendResponse(res, 403, false, "Editor can only changed to creator");
    }

    const updatedUser = await prisma.user.update({
      where: { id: targetUserId },
      data: { role: newRole },
      select: { id: true, name: true, email: true, role: true },
    });

    return sendResponse(res, 200, true, `Role has been changed to ${newRole}`, updatedUser);
  } catch (error) {
    next(error);
  }
};