import express from "express";
import { deleteOldMessages } from "../middleware/chat.middleware.js";
import {
  addMessageToChat,
  createChat,
  getChatByNames,
  getUserChatsList,
  generateConversationTopics,
} from "../controllers/chat.controllers.js";

import { requestLogger } from "../middleware/logger.js";

const router = express.Router();

router.use(requestLogger);
router.route("/conversation/generateTopics").post(generateConversationTopics);
router.route("/logged/user/:user_name").get(getUserChatsList);
router
  .route("/:user1_name/:user2_name")
  .post(createChat)
  .get(deleteOldMessages, getChatByNames);
// .put(addMessageToChat);
export default router;
