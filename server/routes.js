import express from "express";
import userRouter from "./api/user/user.routes.js";
import chatRouter from "./api/chat/chat.routes.js";
import translationRouter from "./api/translation/translation.routes.js";

const router = express.Router();
router.use("/user", userRouter);
router.use("/chat", chatRouter);
router.use("/translation", translationRouter);

export default router;
