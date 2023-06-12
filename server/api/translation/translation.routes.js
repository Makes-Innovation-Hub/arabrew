import express from "express";
import { messageController } from "./translation.controllers.js";

const router = express.Router();

router
  .route("/:user1/:user2/:original_lang/:target_lang")
  .post(messageController);

export default router;
