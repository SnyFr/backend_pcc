import express from "express";
import { addMetric } from "../controllers/metricController.js";
import { authenticateToken } from "../middlewares/middleware.js";

const router = express.Router({ mergeParams: true });

router.use(authenticateToken);

router.post("/", addMetric);

export default router;