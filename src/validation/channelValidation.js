import Joi from "joi";

const VALID_PLATFORMS = ["youtube", "tiktok", "instagram", "linkedin"];

export const createChannelSchema = Joi.object({
  platform: Joi.string()
    .trim()
    .lowercase()
    .valid(...VALID_PLATFORMS)
    .required()
    .messages({
      "string.base": "Platform must be a string",
      "string.empty": "Platform is required",
      "any.only": `Invalid platform. Allowed values: ${VALID_PLATFORMS.join(", ")}`,
      "any.required": "Platform is required",
    }),
  handle_name: Joi.string().trim().min(1).required().messages({
    "string.base": "Handle name must be a string",
    "string.empty": "Handle name is required",
    "any.required": "Handle name is required",
  }),
});