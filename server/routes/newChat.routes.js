import express from "express";
import { validateToken } from "../middleware/verifyUserToken.js";
import {
  addMessage,
  createChat,
  getChatById,
  getUserChatsList,
  removeChat,
} from "../controllers/chatController.js";
const router = express.Router();

//  route /api/new-chat/chat/
router.post("/chat", validateToken, createChat);
router
  .use(validateToken)
  .route("/chat/:chatId")
  .get(getChatById)
  .patch(addMessage)
  .delete(removeChat);
router.get("/chat/existing-conversations/", validateToken, getUserChatsList);

export default router;
