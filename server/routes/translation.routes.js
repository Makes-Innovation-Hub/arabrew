import express from "express";
import { messageController } from "../controllers/translation.controllers.js";
import { requestLogger } from "../middleware/logger.js";

const router = express.Router();
router.use(requestLogger);

router.route("/:original_lang/:target_lang").post(messageController);

export default router;
