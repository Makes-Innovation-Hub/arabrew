import express from "express";
import { deleteOldMessages } from "./chat.middleware.js";
import {
  getChatByNames,
  getUserChatsList,
} from "./chat.controllers-GetFunctions.js";
import {
  addMessageToChat,
  createChat,
} from "./chat.controllers-update-functions.js";
const router = express.Router();

router
  .route("/:user1_name/:user2_name")
  .post(createChat)
  .get(deleteOldMessages, getChatByNames)
  .put(addMessageToChat);
router.route("/logged/user/:user_name").get(getUserChatsList);
export default router;
