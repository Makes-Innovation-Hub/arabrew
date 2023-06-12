import Chat from "./chat.js";
import { asyncHandler } from "../index.js";
import { newestMessage } from "./chat.utils.js";

//$ @desc    create new Chat (between 2 users)
//$ @route   POST /api/chat/:user1_name/:user2_name
//! @access  NOT SET YET
export const createChat = asyncHandler(async (req, res, next) => {
  const { user1_name, user2_name } = req.params;
  const users = { users: [user1_name, user2_name] };

  const newChat = await Chat.create(users);
  if (!newChat) {
    return next(new Error("failed to create new chat "));
  }
  res.status(200).json({
    success: true,
    data: {
      chat: newChat,
    },
  });
});

//$ @desc    add  message(when sent ) to the mssagesHistory ARRAY in chat doc  (between 2 users)
//$ @route   PUT /api/chat/:user1_name/:user2_name
//! @access  NOT SET YET
export const addMessageToChat = asyncHandler(async (req, res, next) => {
  const { user1_name: sender, user2_name: reciever } = req.params;
  const { usersArr, usersArrSwitched } = {
    usersArr: [sender, reciever],
    usersArrSwitched: [reciever, sender],
  };

  const newMsgObj = {
    ...req.body, //* messages content
    sender: sender,
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
  if (!updatedChat)
    return next(
      new Error(`error sending Message from ${sender}, to ${reciever}`)
    );
  let { messagesHistory } = updatedChat;
  delete updatedChat._id;
  messagesHistory.sort((a, b) => a.createdAt - b.createdAt);
  messagesHistory.forEach((message) => {
    delete message._id;
  });

  res.status(200).json(updatedChat);
});

//$ @desc    get chat info  and messages History (between 2 users)
//$ @route   GET /api/chat/:user1_name/:user2_name
//! @access  NOT SET YET
export const getChatByNames = asyncHandler(async (req, res, next) => {
  const { user1_name, user2_name } = req.params;
  const { usersArr, usersArrSwitched } = {
    usersArr: [user1_name, user2_name],
    usersArrSwitched: [user2_name, user1_name],
  };
  let userChat = await Chat.findOne({
    $or: [{ users: usersArr }, { users: usersArrSwitched }],
  }).lean();
  if (!userChat)
    return next(
      new Error(`chat with names: ${(user1_name, user2_name)}, NOT FOUND!`)
    );
  let { messagesHistory } = userChat;
  delete userChat._id;
  messagesHistory.sort((a, b) => a.createdAt - b.createdAt);
  messagesHistory.forEach((message) => {
    delete message._id;
  });
  res.status(200).json(userChat);
});

//$ @desc    get user Chats list with names and last message
//$ @route   GET /api/chat/logged/user/:user_name
//! @access  NOT SET YET
export const getUserChatsList = asyncHandler(async (req, res, next) => {
  const { user_name: name } = req.params;

  let userChats = await Chat.find({
    users: { $all: [name] },
  })
    .sort({ updatedAt: -1 })
    .lean();
  if (!userChats) return next(new Error("failed retrieving"));
  if (userChats.length > 0) {
    userChats = userChats.map((chat) => {
      const { users, messagesHistory } = chat;
      const recieverName = users.filter((user) => user !== name)[0];
      const lastMessage = newestMessage(messagesHistory);
      return {
        lastMessage: lastMessage,
        recieverName: recieverName,
      };
    });
  }

  res.status(200).json(userChats);
});
