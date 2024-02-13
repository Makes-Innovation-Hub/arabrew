import express from "express";
import userRouter from "./user.routes.js";
import chatRouter from "./chat.routes.js";
import translationRouter from "./translation.routes.js";

const router = express.Router();
router.use("/user", userRouter);
router.use("/chat", chatRouter);
router.use("/translation", translationRouter);

export default router;
