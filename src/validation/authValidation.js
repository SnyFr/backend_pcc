import Joi from "joi"

export const registerSchema = Joi.object({
  name: Joi.string().trim().min(5).required().messages({
    "string.base": "Name must be a string",
    "string.empty": "Name is required",
    "string.min" : "Name is too short, must be at least 5 character",
    "any.required": "Name is required",
  }),
  email: Joi.string().trim().email().required().messages({
    "string.base": "Email must be a string",
    "string.empty": "Email is required",
    "string.email": "Invalid email format",
    "any.required": "Email is required",
  }),
  password: Joi.string().min(8).required().messages({
    "string.base": "Password must be a string",
    "string.empty": "Password is required",
    "string.min": "Password must be at least 8 characters",
    "any.required": "Password is required",
  }),
  role: Joi.string()
    .valid("creator", "editor", "admin")
    .default("creator")
    .messages({
      "any.only": "Role must be one of: creator, editor, or admin",
    })
});

export const loginSchema = Joi.object({
  email: Joi.string().trim().email().required().messages({
    "string.empty": "Email is required",
    "string.email": "Invalid email format",
    "any.required": "Email and password are required",
  }),
  password: Joi.string().required().messages({
    "string.empty": "Password is required",
    "any.required": "Email and password are required",
  })
})

