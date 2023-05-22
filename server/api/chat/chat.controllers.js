import asyncHandler from "../../middleware/asyncHandler.js";
import Chat from "./chat.js";

export const saveChatMsg = asyncHandler(async (req, res, next) => {
  const newChat = await Chat.create({
    from: req.params.id_from,
    to: req.params.id_to,
    originalMsg: req.body.originalMsg,
    translatedMsg: req.body.translatedMsg,
  });

  if (!newChat) {
    return next(new Error("error saving chat", newChat));
  }

  return res.status(200).json({
    success: true,
    data: newChat,
  });
});
