import express from "express";
import { deleteOldMessages } from "./chat.middleware.js";
import {
  addMessageToChat,
  createChat,
  getChatByNames,
} from "./chat.controllers.js";

const router = express.Router();

router
  .route("/:user1_name/:user2_name")
  .post(createChat)
  .get(deleteOldMessages, getChatByNames)
  .put(addMessageToChat);

export default router;
