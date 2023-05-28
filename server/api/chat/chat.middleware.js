import Chat from "./chat.js";
import { asyncHandler } from "../index.js";

export const deleteOldMessages = asyncHandler(async (req, res, next) => {
  const { user1_name, user2_name } = req.params;
  const { usersArr, usersArrSwitched } = {
    usersArr: [user1_name, user2_name],
    usersArrSwitched: [user2_name, user1_name],
  };

  const options = { new: true, runValidators: true };

  let chat = await Chat.findOne({
    $or: [{ users: usersArr }, { users: usersArrSwitched }],
  });
  if (!chat)
    return next(
      new Error(`chat with names: ${(user1_name, user2_name)}, NOT FOUND!`)
    );

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

  if (!chat)
    return next(
      new Error(
        `failed deleting old messages from  , chat with names: ${
          (user1_name, user2_name)
        }`
      )
    );

  next();
});
