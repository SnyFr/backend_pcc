import express from "express";
import {
  getContents,
  getContentById,
  createContent,
  updateContent,
  deleteContent,
} from "../controllers/contentController.js";
import { addChecklist } from "../controllers/checklistController.js";
import { addMetric } from "../controllers/metricController.js";
import { authenticateToken } from "../middlewares/middleware.js";
import { validate } from "../middlewares/ValidationMiddleware.js";
import { getContentsSchema, createContentSchema, updateContentSchema } from "../validation/contentValidation.js";
import { addChecklistSchema } from "../validation/checklistValidation.js";

const router = express.Router();

// Seluruh endpoint konten dilindungi oleh authenticateToken
router.use(authenticateToken);

// CRUD Konten & Pipeline (Tiket CCP-03)
router.get("/", validate(getContentsSchema, "query"), getContents);
router.post("/", validate(createContentSchema), createContent);
router.get("/:id", getContentById);
router.put("/:id", validate(updateContentSchema), updateContent);
router.delete("/:id", deleteContent);

// Submodul Checklists per Konten (Tiket CCP-04)
router.post("/:id/checklists", validate(addChecklistSchema), addChecklist);

// Submodul Metrics Snapshot per Konten (Tiket CCP-05)
router.post("/:id/metrics", addMetric);

export default router;

