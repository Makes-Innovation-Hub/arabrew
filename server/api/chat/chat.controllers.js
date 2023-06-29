import Chat from "./chat.js";
import { asyncHandler, User } from "../index.js";
import {
  controllerLogger,
  successLogger,
  errorLogger,
  timingLogger,
  databaseLogger,
} from "../../middleware/logger.js";
import { newestMessage } from "./chat.utils.js";

//$ @desc    create new Chat (between 2 users)
//$ @route   POST /api/chat/:user1_name/:user2_name
//! @access  NOT SET YET
export const createChat = asyncHandler(async (req, res, next) => {
  const { user1_name, user2_name } = req.params;
  const users = { users: [user1_name, user2_name] };

  // Logging controller event
  controllerLogger("createChat", req.params, "Creating new chat");
  const startTime = Date.now();
  try {
    // Logging database query
    databaseLogger(
      "Service: createChat, Create new chat",
      { users: [user1_name, user2_name] },
      "Creating new chat"
    );
    const newChat = await Chat.create(users);
    if (!newChat) {
      // Logging error
      errorLogger("failed to create new chat", req, res, next);
      return next(new Error("failed to create new chat "));
    }

    // Logging timing
    timingLogger("createChat", startTime);

    // Logging after the service ends successfully
    successLogger("createChat", {
      users: [user1_name, user2_name],
      chat: newChat,
    });
    res.status(200).json({
      success: true,
      data: {
        chat: newChat,
      },
    });
  } catch (error) {
    // Logging error
    errorLogger(error, req, res, next);

    next(error);
  }
});

//$ @desc    add  message(when sent ) to the mssagesHistory ARRAY in chat doc  (between 2 users)
//$ @route   PUT /api/chat/:user1_name/:user2_name
//! @access  NOT SET YET
export const addMessageToChat = asyncHandler(async (req, res, next) => {
  const { user1_name: sender, user2_name: receiver } = req.params;
  const { usersArr, usersArrSwitched } = {
    usersArr: [sender, receiver],
    usersArrSwitched: [receiver, sender],
  };

  const { contentOriginal, contentTranslated } = req.body;

  const newMsgObj = {
    sender: sender,
    receiver: receiver,
    contentOriginal: contentOriginal,
    contentTranslated: contentTranslated,
    createdAt: new Date().toLocaleString("en-US", {
      timeZone: "Asia/Jerusalem",
      hour12: false,
      timeZoneName: "short",
    }),
  };
  const options = { new: true, runValidators: true };
  // Logging controller event
  controllerLogger("addMessageToChat", req.params, "Adding message to chat");

  const startTime = Date.now();
  try {
    // Logging database query
    databaseLogger(
      "Service: addMessageToChat, Find and update chat",
      { usersArr, usersArrSwitched },
      "Finding and updating chat"
    );
    let updatedChat = await Chat.findOneAndUpdate(
      { $or: [{ users: usersArr }, { users: usersArrSwitched }] },
      { $push: { messagesHistory: newMsgObj } },
      options
    ).lean();
    if (!updatedChat) {
      // Logging error
      errorLogger(
        `error sending Message from ${sender}, to ${receiver}`,
        req,
        res,
        next
      );

      return next(
        new Error(`error sending Message from ${sender}, to ${receiver}`)
      );
    }

    let { messagesHistory } = updatedChat;
    delete updatedChat._id;
    messagesHistory.sort((a, b) => a.createdAt - b.createdAt);
    messagesHistory.forEach((message) => {
      delete message._id;
    });

    // Logging timing
    timingLogger("addMessageToChat", startTime);
    // Logging after the service ends successfully

    res.status(200).json(updatedChat);
  } catch (error) {
    // Logging error
    errorLogger(error, req, res, next);

    next(error);
  }
});

//$ @desc    get chat info  and messages History (between 2 users)
//$ @route   GET /api/chat/:user1_name/:user2_name
//! @access  NOT SET YET
export const getChatByNames = asyncHandler(async (req, res, next) => {
  const { user1_name, user2_name } = req.params;
  const { userLang } = req.query;
  const { usersArr, usersArrSwitched } = {
    usersArr: [user1_name, user2_name],
    usersArrSwitched: [user2_name, user1_name],
  };
  // Logging controller event
  controllerLogger(
    "getChatByNames",
    req.params,
    "Getting chat info and messages history"
  );

  const startTime = Date.now();

  try {
    // Logging database query
    databaseLogger(
      "Service: getChatByNames, Find chat by names",
      { user1_name, user2_name },
      "Getting chat info and messages history"
    );
    let userChat = await Chat.findOne({
      $or: [{ users: usersArr }, { users: usersArrSwitched }],
    }).lean();
    if (!userChat) {
      // Logging error
      errorLogger(
        `Chat with names: ${user1_name}, ${user2_name} not found`,
        req,
        res,
        next
      );
      return next(
        new Error(`chat with names: ${(user1_name, user2_name)}, NOT FOUND!`)
      );
    }
    let { messagesHistory } = userChat;
    delete userChat._id;
    messagesHistory.sort((a, b) => a.createdAt - b.createdAt);
    messagesHistory.forEach((message) => {
      message.id = message._id;
      message.content = message["content_" + userLang];
      delete message.content_AR;
      delete message.content_HE;
      delete message._id;
    });
    // Logging timing
    timingLogger("getChatByNames", startTime);

    // Logging after the service ends successfully
    successLogger("getChatByNames", {
      user1_name,
      user2_name,
      userChat,
    });

    res.status(200).json(userChat);
  } catch (error) {
    // Logging error
    errorLogger(error, req, res, next);

    next(error);
  }
});

//$ @desc    get user Chats list with names and last message
//$ @route   GET /api/chat/logged/user/:user_name
//! @access  NOT SET YET
export const getUserChatsList = asyncHandler(async (req, res, next) => {
  const { user_name: name } = req.params;
  //* const {userLang}=req.body
  // Logging controller event
  controllerLogger(
    "getUserChatsList",
    { user_name: name },
    "Retrieving user chats list"
  );
  const startTime = Date.now();

  try {
    // Logging database query
    databaseLogger(
      "Service: getUserChatsList, Find chat by user name",
      { name },
      "Getting chats list"
    );
    let userChats = await Chat.find({
      users: { $all: [name] },
    })
      .sort({ updatedAt: -1 })
      .lean();
    if (!userChats) {
      return next(new Error("failed retrieving"));
    }
    if (userChats.length > 0) {
      userChats = await Promise.all(
        userChats.map(async (chat) => {
          const { users, messagesHistory } = chat;
          const recieverName = users.filter((user) => user !== name)[0];
          const reciverUser = await User.findOne({ name: recieverName }).lean();
          const senderUser = await User.findOne({ name }).lean();
          const senderLang = senderUser.userDetails.nativeLanguage;
          const userAvatar = reciverUser ? reciverUser.avatar : null;
          const lastMessage = newestMessage(messagesHistory, name, senderLang);
          return {
            profile: userAvatar,
            name: recieverName,
            lastCon: lastMessage,
          };
        })
      ).catch((err) => {
        console.log("err in finding chat msg", err);
      });
    }

    // Logging timing
    timingLogger("getUserChatsList", startTime);

    // Logging after the service ends successfully
    successLogger("getUserChatsList", { userName: name, userChats });

    res.status(200).json(userChats);
  } catch (error) {
    // Logging error
    errorLogger(error, req, res, next);

    next(error);
  }
});
