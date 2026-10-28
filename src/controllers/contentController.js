import pool from "../config/db.js";
import sendResponse from "../utils/response.js";

// 1. GET /api/v1/contents
export const getContents = async (req, res, next) => {
  try {
    const userId = req.user.id;
    const { status, channel_id, format_type } = req.query;

    let sql = `SELECT c.id, c.user_id, c.channel_id, ch.platform AS channel_platform, ch.handle_name AS channel_handle, c.title, c.description, c.script_draft, c.format_type, c.status, c.priority, c.scheduled_date, c.published_date, c.published_url, c.created_at, c.updated_at FROM contents c JOIN channels ch ON c.channel_id = ch.id WHERE c.user_id = ? `;
    const params = [userId];

    if (status) {
      sql += " AND c.status = ?";
      params.push(status);
    }

    if (channel_id) {
      sql += " AND c.channel_id = ?";
      params.push(channel_id);
    }

    if (format_type) {
      sql += " AND c.format_type = ?";
      params.push(format_type);
    }

    sql += " ORDER BY c.created_at DESC";

    const [contents] = await pool.execute(sql, params);

    return sendResponse(res, 200, true, "Contents retrieved successfully", contents);
  } catch (error) {
    next(error);
  }
};

// 2. GET /api/v1/contents/:id
export const getContentById = async (req, res, next) => {
  try {
    const userId = req.user.id;
    const contentId = req.params.id;

    const [contents] = await pool.execute(
      `
      SELECT 
        c.id, c.user_id, c.channel_id,
        ch.platform AS channel_platform, ch.handle_name AS channel_handle,
        c.title, c.description, c.script_draft, c.format_type, c.status, c.priority,
        c.scheduled_date, c.published_date, c.published_url,
        c.created_at, c.updated_at
      FROM contents c
      JOIN channels ch ON c.channel_id = ch.id
      WHERE c.id = ? AND c.user_id = ?
      `,
      [contentId, userId]
    );

    if (contents.length === 0) {
      return sendResponse(res, 404, false, "Content not found");
    }

    const content = contents[0];

    const [checklists] = await pool.execute(
      "SELECT id, content_id, task_name, is_completed, created_at FROM content_checklists WHERE content_id = ? ORDER BY id ASC",
      [contentId]
    );

    const [metrics] = await pool.execute(
      "SELECT id, content_id, recorded_at, views_count, likes_count, comments_count, shares_count, created_at FROM content_metrics WHERE content_id = ? ORDER BY recorded_at DESC",
      [contentId]
    );

    return sendResponse(res, 200, true, "Content detail retrieved successfully", {
      ...content,
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
      description = null,
      script_draft = null,
      format_type,
      status,
      priority,
      scheduled_date = null,
    } = req.body;

    // Cek kepemilikan channel
    const [channels] = await pool.execute(
      "SELECT id FROM channels WHERE id = ? AND user_id = ?",
      [channel_id, userId]
    );

    if (channels.length === 0) {
      return sendResponse(res, 400, false, "Channel not found or does not belong to user");
    }

    // Insert ke database
    const [result] = await pool.execute(
      `
      INSERT INTO contents 
      (user_id, channel_id, title, description, script_draft, format_type, status, priority, scheduled_date)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
      `,
      [
        userId,
        channel_id,
        title,
        description,
        script_draft,
        format_type,
        status,
        priority,
        scheduled_date,
      ]
    );

    return sendResponse(res, 201, true, "Content created successfully", {
      id: result.insertId,
      user_id: userId,
      channel_id,
      title,
      description,
      script_draft,
      format_type,
      status,
      priority,
      scheduled_date,
      published_date: null,
      published_url: null,
    });
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

    const [contents] = await pool.execute(
      "SELECT * FROM contents WHERE id = ? AND user_id = ?",
      [contentId, userId]
    );

    const currentContent = contents[0];

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
    let newChannelId = currentContent.channel_id;
    if (channel_id !== undefined && channel_id !== currentContent.channel_id) {
      const [channels] = await pool.execute(
        "SELECT id FROM channels WHERE id = ? AND user_id = ?",
        [channel_id, userId]
      );
      if (channels.length === 0) {
        return sendResponse(res, 400, false, "Channel not found or does not belong to user");
      }
      newChannelId = channel_id;
    }

    const targetStatus = status !== undefined ? status : currentContent.status;
    let newPublishedUrl = published_url !== undefined ? published_url : currentContent.published_url;
    let newPublishedDate = published_date !== undefined ? published_date : currentContent.published_date;

    if (targetStatus === "published" && !newPublishedDate) {
      newPublishedDate = new Date().toISOString().split("T")[0];
    }

    const newTitle = title !== undefined ? title : currentContent.title;
    const newDescription = description !== undefined ? description : currentContent.description;
    const newScriptDraft = script_draft !== undefined ? script_draft : currentContent.script_draft;
    const newFormatType = format_type !== undefined ? format_type : currentContent.format_type;
    const newPriority = priority !== undefined ? priority : currentContent.priority;
    const newScheduledDate = scheduled_date !== undefined ? scheduled_date : currentContent.scheduled_date;

    await pool.execute(
      `
      UPDATE contents SET
        channel_id = ?,
        title = ?,
        description = ?,
        script_draft = ?,
        format_type = ?,
        status = ?,
        priority = ?,
        scheduled_date = ?,
        published_date = ?,
        published_url = ?
      WHERE id = ? AND user_id = ?
      `,
      [
        newChannelId,
        newTitle,
        newDescription,
        newScriptDraft,
        newFormatType,
        targetStatus,
        newPriority,
        newScheduledDate,
        newPublishedDate,
        newPublishedUrl,
        contentId,
        userId,
      ]
    );

    return sendResponse(res, 200, true, "Content updated successfully", {
      id: Number(contentId),
      user_id: userId,
      channel_id: newChannelId,
      title: newTitle,
      description: newDescription,
      script_draft: newScriptDraft,
      format_type: newFormatType,
      status: targetStatus,
      priority: newPriority,
      scheduled_date: newScheduledDate,
      published_date: newPublishedDate,
      published_url: newPublishedUrl,
    });
  } catch (error) {
    next(error);
  }
};

// 5. DELETE /api/v1/contents/:id
export const deleteContent = async (req, res, next) => {
  try {
    const userId = req.user.id;
    const contentId = req.params.id;

    const [contents] = await pool.execute(
      "SELECT id FROM contents WHERE id = ? AND user_id = ?",
      [contentId, userId]
    );

    if (contents.length === 0) {
      return sendResponse(res, 404, false, "Content not found");
    }

    await pool.execute("DELETE FROM contents WHERE id = ? AND user_id = ?", [
      contentId,
      userId,
    ]);

    return res.status(204).send();
  } catch (error) {
    next(error);
  }
};