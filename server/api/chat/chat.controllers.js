import { User, Chat, Message, log, asyncHandler } from "../index.js";

export const createChat = asyncHandler(async (req, res, next) => {
  const { senderId, friendId } = req.params;
  const content = req.body.content || null;
  const users = { users: [senderId, friendId] };
  const newChatDoc = content
    ? {
        ...users,
        latestMessage: content,
      }
    : users;
  // log.error(newChatDoc)
  const newChat = await Chat.create(newChatDoc);
  if (!newChat) {
    return next(new Error("failed to create new chat "));
  }
  const { id } = newChat;
  if (newChat && content) {
    const { content } = req.body;
    const messageDoc = {
      chatId: id,
      content: content,
      sender: senderId,
    };
    const newMessage = await Message.create(messageDoc);
    return res.status(200).json({
      success: true,
      data: {
        chat: newChat,
        message: newMessage,
      },
    });
  }
  res.status(200).json({
    success: true,
    data: {
      chat: newChat,
    },
  });
});

export const getUserChats = asyncHandler(async (req, res, next) => {
  const { userId } = req.param;
  const userChats = await Chat.findOne({
    field: { $in: [userId] },
  })
    .populate({
      path: "latestMessage",
      select: " content",
    })
    .populate({
      path: "users",
      select: "name",
    })
    .exec((err, doc) => {
      if (err) return next(new Error(err));
      const { users } = doc;
      const userFriend = users.map((user) =>
        user.id !== userId ? user.name : null
      );
      return userFriend[0];
    });

  // const reciever=userChats.users.map((user)=>user.id!==userId?user.name:null);

  if (!userChats) {
    return next(new Error(`no chats for user with id ${userId}`));
  }
  log.debug(userChats);
  res.status(200).json({
    success: true,
    data: userChats,
  });
});
//! this function response =>
// 1.friendsnames
// 2.lastmessage was sent
// 3. const userChats should be in descending order
