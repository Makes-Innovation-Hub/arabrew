import { User, Chat, Message, log, asyncHandler } from "../index.js";

export const createChat = asyncHandler(async (req, res, next) => {
  const { senderId, friendId } = req.params;
  const users = { users: [senderId, friendId] };

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

export const getUserChats = asyncHandler(async (req, res, next) => {
  const { userId } = req.params;
  const userChats = await Chat.find({
    users: { $in: [userId] },
  })
    .populate({
      path: "users",
      select: "name id",
    })
    .populate({
      path: "latestMessage",
      select: " content",
    })
    .sort({ updatedAt: -1 });

  if (!userChats) {
    return next(new Error(`no chats for user with id ${userId}`));
  }
  const allchats = userChats.map((chat) => {
    const { users, updatedAt, chatId } = chat;
    let lastMsg = { lastMsg: chat.latestMessage } || {};
    const friend = users.filter((user) => user.id !== userId)[0].name;

    return {
      chatId: chatId,
      friend: friend,
      ...lastMsg,
      updatedAt: updatedAt.toLocaleString("en-US", {
        timeZone: "Asia/Jerusalem",
        hour12: false,
      }),
    };
  });

  if (!allchats)
    return next(new Error("failed preparing chatslist response object "));
  log.debug(allchats);
  res.status(200).json({
    success: true,
    data: allchats,
  });
});
