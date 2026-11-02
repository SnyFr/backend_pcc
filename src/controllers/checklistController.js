import pool from "../config/db.js";
import sendResponse from "../utils/response.js";
import prisma from "../config/prisma.js";

// POST /api/v1/contents/:id/checklists (Menambah item checklist baru)
export const addChecklist = async (req, res, next) => {
  try {
    const userId = req.user.id;
    const contentId = BigInt(req.params.id);
    const { task_name } = req.body;

    // Task checklist hanya dapat diberikan oleh creator pemilik content.
    const content = await prisma.content.findFirst({
      where: { id: contentId, user_id: BigInt(userId) },
    });

    if (!content) {
      return sendResponse(res, 404, false, "Content not found");
    }

    const newChecklist = await prisma.contentChecklist.create({
      data: {
        content_id: contentId,
        task_name,
        is_completed: false,
      },
    });

    return sendResponse(res, 201, true, "Checklist item added successfully", newChecklist);
  } catch (error) {
    next(error);
  }
};

// PATCH /api/v1/checklists/:id/toggle (Toggle status is_completed)
export const toggleChecklist = async (req, res, next) => {
  try {
    const { id: userId, role } = req.user;
    const checklistId = BigInt(req.params.id);

    // Creator dapat checklist content miliknya. Editor dapat checklist
    // content creator hanya saat statusnya sedang editing.
    const checklist = await prisma.contentChecklist.findFirst({
      where: {
        id: checklistId,
        content:
          role === "editor"
            ? { status: "editing" }
            : { user_id: BigInt(userId) },
      },
    });

    if (!checklist) {
      return sendResponse(res, 404, false, "Checklist item not found");
    }

    const updatedChecklist = await prisma.contentChecklist.update({
      where: { id: checklistId },
      data: { is_completed: !checklist.is_completed },
    });

    return sendResponse(res, 200, true, "Checklist status toggled successfully", updatedChecklist);
  } catch (error) {
    next(error);
  }
};

// DELETE /api/v1/checklists/:id (Hapus item checklist)
export const deleteChecklist = async (req, res, next) => {
  try {
    const userId = req.user.id;
    const checklistId = BigInt(req.params.id);

    // Editor hanya boleh mengubah status checklist, bukan menghapus task.
    const checklist = await prisma.contentChecklist.findFirst({
      where: {
        id: checklistId,
        content: { user_id: BigInt(userId) },
      },
    });

    if (!checklist) {
      return sendResponse(res, 404, false, "Checklist item not found");
    }

    await prisma.contentChecklist.delete({
      where: { id: checklistId },
    });;

    return res.status(204).send();
  } catch (error) {
    next(error);
  }
};
