import express from "express";
import { getChannels, createChannel, updateChannel, deleteChannel } from "../controllers/channelController.js";
import { authenticateToken } from "../middlewares/middleware.js";
import { createChannelSchema } from "../validation/channelValidation.js";
import { validate } from "../middlewares/ValidationMiddleware.js";

const router = express.Router();

// Semua endpoint channel memerlukan token otentikasi
router.use(authenticateToken);

router.get("/", getChannels);
router.post("/", validate(createChannelSchema), createChannel);
router.put("/:id", validate(createChannelSchema), updateChannel);
router.delete("/:id", deleteChannel);

export default router;

