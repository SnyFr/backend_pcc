import express from "express";
import { switchRole } from "../../controllers/userController.js";
import { authenticateToken } from "../../middlewares/authMiddleware.js";

const router = express.Router();

router.use(authenticateToken);

router.patch("/swt-role", switchRole);

export default router;