import express from "express";
import { messageController } from "./translation.controllers.js";
import { requestLogger } from "../../middleware/logger.js";

const router = express.Router();

router.use(requestLogger);

router
  .route("/:user1/:user2/:original_lang/:target_lang")
  .post(messageController);

export default router;
