import express from "express";
import { messageController } from "./translation.controllers.js";
import pino from "pino";

const router = express.Router();

const logger = pino();
router.use((req, res, next) => {
  const { url, method } = req;
  logger.info(`Incoming request - URL: api/chat${url}, Method: ${method}`);
  next();
});

router
  .route("/:user1/:user2/:original_lang/:target_lang")
  .post(messageController);

export default router;
