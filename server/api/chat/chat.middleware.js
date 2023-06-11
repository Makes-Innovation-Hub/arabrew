import Chat from "./chat.js";
import { asyncHandler } from "../index.js";
import {
  controllerLogger,
  databaseLogger,
  errorLogger,
  successLogger,
  timingLogger,
} from "../../middleware/logger.js";

export const deleteOldMessages = asyncHandler(async (req, res, next) => {
  const { user1_name, user2_name } = req.params;
  const { usersArr, usersArrSwitched } = {
    usersArr: [user1_name, user2_name],
    usersArrSwitched: [user2_name, user1_name],
  };
  const options = { new: true, runValidators: true };
  // Logging controller event
  controllerLogger("deleteOldMessages", req.params, "Deleting old messages");

  const startTime = Date.now();

  try {
    // Logging database query
    databaseLogger(
      "Service: deleteOldMessages, Find chat by names",
      { user1_name, user2_name },
      "Deleting old messages"
    );
    let chat = await Chat.findOne({
      $or: [{ users: usersArr }, { users: usersArrSwitched }],
    });
    if (!chat) {
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

    const monthInMs = 30 * 24 * 60 * 60 * 1000;

    const UpdatedMessagesArr = chat.messagesHistory.filter((message) => {
      const timeSinceCreated = new Date() - message.createdAt;
      const isExpired = timeSinceCreated > monthInMs ? true : false;
      return !isExpired;
    });

    let updatedChat = await Chat.findOneAndUpdate(
      { $or: [{ users: usersArr }, { users: usersArrSwitched }] },
      { messagesHistory: UpdatedMessagesArr },
      options
    ).lean();

    if (!chat) {
      // Logging error
      errorLogger(
        `Failed deleting old messages from chat with names: ${user1_name}, ${user2_name}`,
        req,
        res,
        next
      );
      return next(
        new Error(
          `failed deleting old messages from  , chat with names: ${
            (user1_name, user2_name)
          }`
        )
      );
    }

    // Logging timing
    timingLogger("deleteOldMessages", startTime);

    // Logging after the service ends successfully
    successLogger("deleteOldMessages", {
      user1_name,
      user2_name,
    });

    next();
  } catch (error) {
    // Logging error
    errorLogger(error, req, res, next);

    next(error);
  }
});
