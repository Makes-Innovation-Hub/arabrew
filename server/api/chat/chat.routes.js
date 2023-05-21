import express from "express";
import { startChat } from "./chat.controllers.js";

const router = express.Router();

router.post("/:id1/:id2", startChat);

export default router;
