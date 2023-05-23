import express from "express";

import { saveChatMsg } from "./chat.controllers.js";

const router = express.Router();
router.route("/:id_from/:id_to").post(saveChatMsg);

export default router;
