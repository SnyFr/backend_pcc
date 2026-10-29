import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import sendResponse from "../utils/response.js";
import prisma from "../config/prisma.js";

export const register = async (req, res, next) => {
  try {
    const { name, email, password, role } = req.body;
    const normalizedEmail = email.toLowerCase();

    // Cek email sudah terdaftar atau belum
    const existingUser = await prisma.user.findUnique({
      where: { email: normalizedEmail },
      select: { id: true },
    });

    if (existingUser) {
      return sendResponse(res, 400, false, "Email already taken");
    }

    // password hash
    const saltRounds = 10;
    const passwordHash = await bcrypt.hash(password, saltRounds);

    // insert user baru
    const newUser = await prisma.user.create({
      data: {
        name,
        email: normalizedEmail,
        password_hash: passwordHash,
        role,
      },
      select: { 
        id: true, 
        name: true, 
        email: true, 
        role: true },
    });

    return sendResponse(res, 201, true, "User registered successfully", {
      id: result.insertId,
      name: newUser.name,
      email: newUser.email,
      role: newUser.role
    });
  } catch (error) {
    next(error);
  }
};

export const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const normalizedEmail = email.toLowerCase();

    // Cari user berdasarkan email
    const user = await prisma.user.findUnique({
      where: { email: normalizedEmail },
    });

    if (!user) {
      return sendResponse(res, 401, false, "Invalid email or password");
    }

    // Verifikasi password
    const isMatch = await bcrypt.compare(password, user.password_hash);
    if (!isMatch) {
      return sendResponse(res, 401, false, "Invalid email or password");
    }

    // Terbitkan JWT token
    const token = jwt.sign(
      {
        id: user.id.toString(),
        email: user.email,
        role: user.role,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: process.env.JWT_EXPIRES_IN || "1d",
      }
    );

    return sendResponse(res, 200, true, "Login successful", {
      token,
      user: {
        id: user.id.toString(),
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });
  } catch (error) {
    next(error);
  }
};