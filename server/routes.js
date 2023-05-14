import express from "express";
import userRouter from "./api/user/user.routes";
import chatRouter from "./api/chat/chat.routes";
import messageRouter from "./api/message/message.routes";
import translationRouter from "./api/translation/translation.routes";


const router=express.Router();

router.use("/user",userRouter)
router.use("/chat",chatRouter)
router.use("/message",messageRouter)
router.use("/translation",translationRouter)


export default router;