import express from "express";
import { getMessagesByChatId, sendMessage } from "./message.controllers.js";
import { isUserInChat } from "./message.middlewares.js";
const router = express.Router();

router.param("userId", isUserInChat);

router
  .route("/:chatId/:userId")
  .post(sendMessage)
  .get(isUserInChat, getMessagesByChatId);
export default router;
