import Joi from "joi";

const VALID_FORMAT_TYPES = ["short_video", "long_video", "carousel", "single_post"];
const VALID_STATUSES = ["idea", "scripting", "recording", "editing", "review", "ready", "published"];
const VALID_PRIORITIES = ["low", "medium", "high"];

// Validasi params untuk filter list content
export const getContentsSchema = Joi.object({
  status: Joi.string().valid(...VALID_STATUSES).optional(),
  channel_id: Joi.number().integer().positive().optional(),
  format_type: Joi.string().valid(...VALID_FORMAT_TYPES).optional(),
});

// Validasi Create Content
export const createContentSchema = Joi.object({
  channel_id: Joi.number().integer().positive().required().messages({
    "number.base": "Channel ID must be a number",
    "any.required": "Channel ID is required",
  }),
  title: Joi.string().trim().min(1).required().messages({
    "string.base": "Title must be a string",
    "string.empty": "Title is required",
    "any.required": "Title is required",
  }),
  description: Joi.string().trim().allow("", null).optional(),
  script_draft: Joi.string().trim().allow("", null).optional(),
  format_type: Joi.string()
    .valid(...VALID_FORMAT_TYPES)
    .required()
    .messages({
      "any.only": `Invalid format_type. Allowed values: ${VALID_FORMAT_TYPES.join(", ")}`,
      "any.required": "Format type is required",
    }),
  status: Joi.string()
    .valid(...VALID_STATUSES)
    .default("idea")
    .messages({
      "any.only": `Invalid status. Allowed values: ${VALID_STATUSES.join(", ")}`,
    }),
  priority: Joi.string()
    .valid(...VALID_PRIORITIES)
    .default("medium")
    .messages({
      "any.only": `Invalid priority. Allowed values: ${VALID_PRIORITIES.join(", ")}`,
    }),
  scheduled_date: Joi.string().isoDate().allow(null).optional().messages({
    "string.isoDate": "Scheduled date must be a valid ISO Date format",
  }),
});

// Validasi Update Content
export const updateContentSchema = Joi.object({
  channel_id: Joi.number().integer().positive().optional(),
  title: Joi.string().trim().min(1).optional().messages({
    "string.empty": "Title cannot be empty",
  }),
  description: Joi.string().trim().allow("", null).optional(),
  script_draft: Joi.string().trim().allow("", null).optional(),
  format_type: Joi.string()
    .valid(...VALID_FORMAT_TYPES)
    .optional()
    .messages({
      "any.only": `Invalid format_type. Allowed values: ${VALID_FORMAT_TYPES.join(", ")}`,
    }),
  status: Joi.string()
    .valid(...VALID_STATUSES)
    .optional()
    .messages({
      "any.only": `Invalid status. Allowed values: ${VALID_STATUSES.join(", ")}`,
    }),
  priority: Joi.string()
    .valid(...VALID_PRIORITIES)
    .optional()
    .messages({
      "any.only": `Invalid priority. Allowed values: ${VALID_PRIORITIES.join(", ")}`,
    }),
  scheduled_date: Joi.string().isoDate().allow(null).optional().messages({
    "string.isoDate": "Scheduled date must be a valid ISO Date format",
  }),
  published_date: Joi.string().isoDate().allow(null).optional(),
  published_url: Joi.string().trim().uri({ scheme: ["http", "https"] }).allow("", null).optional().messages({
    "string.uri": "Published URL must be a valid web URL (e.g., https://...)",
  }),
})
  // Jika status = 'published', published_url wajib ada dan valid
  .custom((value, helpers) => {
    if (value.status === "published") {
      if (!value.published_url || value.published_url.trim() === "") {
        return helpers.message({
          custom: "Published URL is required when status is changed to published",
        });
      }
    }
    return value;
  });