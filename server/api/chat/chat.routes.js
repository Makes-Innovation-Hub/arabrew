import express from "express";
import { deleteOldMessages } from "./chat.middleware.js";
import {
  addMessageToChat,
  createChat,
  getChatByNames,
  getUserChatsList,
} from "./chat.controllers.js";
const router = express.Router();

router
  .route("/:user1_name/:user2_name")
  .post(createChat)
  .get(deleteOldMessages, getChatByNames)
  .put(addMessageToChat);
router.route("/logged/user/:loggedUser_name").get(getUserChatsList);
export default router;
