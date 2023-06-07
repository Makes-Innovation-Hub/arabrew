import express from "express";
import { deleteOldMessages } from "./chat.middleware.js";
import {
  addMessageToChat,
  createChat,
  getChatByNames,
  getUserChatsList,
} from "./chat.controllers.js";

import { requestLogger } from "../../middleware/logger.js";

const router = express.Router();

router.use(requestLogger);

router
  .route("/:user1_name/:user2_name")
  .post(createChat)
  .get(deleteOldMessages, getChatByNames)
  .put(addMessageToChat);
router.route("/logged/user/:user_name").get(getUserChatsList);
export default router;
