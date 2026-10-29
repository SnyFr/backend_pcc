import Joi from "joi";

export const addChecklistSchema = Joi.object({
  task_name: Joi.string().trim().min(1).required().messages({
    "string.base": "Task name must be a string",
    "string.empty": "Task name is required",
    "any.required": "Task name is required",
  }),
});