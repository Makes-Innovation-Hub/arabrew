import express from "express";
import { deleteOldMessages } from "./chat.middleware.js";
import {
  addMessageToChat,
  createChat,
  getChatByNames,
} from "./chat.controllers.js";
import pino from "pino";

const router = express.Router();

const logger = pino();
router.use((req, res, next) => {
  const { url, method } = req;
  logger.info(`Incoming request - URL: api/chat${url}, Method: ${method}`);
  next();
});

router
  .route("/:user1_name/:user2_name")
  .post(createChat)
  .get(deleteOldMessages, getChatByNames)
  .put(addMessageToChat);

export default router;
