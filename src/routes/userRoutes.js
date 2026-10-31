import express from "express";
import { updateRole } from "../controllers/userController.js";
import { authenticateToken } from "../middlewares/middleware.js";

const router = express.Router();

router.use(authenticateToken);

router.patch("/swt-role", updateRole);

export default router;