import Chat from "./chat.js";
import { asyncHandler } from "../index.js";
//$ @desc    create new Chat (between 2 users)
//$ @route   POST /api/chat/:user1_name/:user2_name
//! @access  NOT SET YET
export const createChat = asyncHandler(async (req, res, next) => {
  const { user1_name, user2_name } = req.params;
  const newChat = await Chat.create({ users: [user1_name, user2_name] });
  if (!newChat) return next(new Error("Failed to create new chat."));
  res.status(200).json({
    success: true,
    data: { chat: newChat },
  });
});
//$ @desc    add  message(when sent ) to the mssagesHistory ARRAY in chat doc  (between 2 users)
//$ @route   PUT /api/chat/:user1_name/:user2_name
//! @access  NOT SET YET
export const addMessageToChat = asyncHandler(async (req, res, next) => {
  const { user1_name: sender, user2_name: receiver } = req.params;
  const usersArr = [sender, receiver];
  const usersArrSwitched = [receiver, sender];
  const newMsgObj = {
    ...req.body,
    sender,
    createdAt: new Date().toLocaleString("en-US", {
      timeZone: "Asia/Jerusalem",
      hour12: false,
      timeZoneName: "short",
    }),
  };
  const options = { new: true, runValidators: true };
  let updatedChat = await Chat.findOneAndUpdate(
    { $or: [{ users: usersArr }, { users: usersArrSwitched }] },
    { $push: { messagesHistory: newMsgObj } },
    options
  ).lean();
  if (!updatedChat) {
    return next(
      new Error(`Error sending message from ${sender} to ${receiver}.`)
    );
  }
  const { messagesHistory } = updatedChat;
  delete updatedChat._id;
  messagesHistory.sort((a, b) => a.createdAt - b.createdAt);
  messagesHistory.forEach((message) => delete message._id);
  res.status(200).json(updatedChat);
});
