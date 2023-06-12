import Chat from "./chat.js";
import { asyncHandler } from "../index.js";
import { newestMessage } from "./chat.utils.js";
//$ @desc    get chat info  and messages History (between 2 users)
//$ @route   GET /api/chat/:user1_name/:user2_name
//! @access  NOT SET YET
export const getChatByNames = asyncHandler(async (req, res, next) => {
  const { user1_name, user2_name } = req.params;
  const usersArr = [user1_name, user2_name];
  const usersArrSwitched = [user2_name, user1_name];
  const userChat = await Chat.findOne({
    $or: [{ users: usersArr }, { users: usersArrSwitched }],
  }).lean();
  if (!userChat)
    return next(
      new Error(
        `Chat with names '${user1_name}' and '${user2_name}' not found!`
      )
    );
  const { messagesHistory } = userChat;
  messagesHistory.sort((a, b) => a.createdAt - b.createdAt);
  messagesHistory.forEach((message) => delete message._id);
  delete userChat._id;
  res.status(200).json(userChat);
});
//$ @desc    get user Chats list with names and last message
//$ @route   GET /api/chat/logged/user/:user_name
//! @access  NOT SET YET
export const getUserChatsList = asyncHandler(async (req, res, next) => {
  const { user_name: name } = req.params;
  const userChats = await Chat.find({ users: { $all: [name] } })
    .sort({ updatedAt: -1 })
    .lean();
  if (!userChats) return next(new Error("Failed to retrieve user chats."));
  const transformedChats = userChats.map((chat) => {
    const { users, messagesHistory } = chat;
    const recieverName = users.find((user) => user !== name);
    const lastMessage = newestMessage(messagesHistory);
    return {
      lastMessage,
      recieverName,
    };
  });
  res.status(200).json(transformedChats);
});
