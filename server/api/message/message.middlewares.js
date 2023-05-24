import { asyncHandler, Chat } from "../index.js";

export const isUserInChat = asyncHandler(async (req, res, next) => {
  const { chatId, userId } = req.params;
  const chatDoc = await Chat.findOne({ _id: chatId, users: { $in: [userId] } });
  if (!chatDoc)
    return next(
      new Error(` failed finding, chatid:${chatId} , senderId:${senderId}`)
    );
  next();
});
