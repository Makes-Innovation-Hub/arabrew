import express from "express";
import { createChat, getUserChats } from "./chat.controllers.js";
const router = express.Router();

router.route("/all-chats/:userId").get(getUserChats);
router.route("/new/:senderId/:friendId").post(createChat);
export default router;
