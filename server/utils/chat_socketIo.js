import { Chat } from "../api/index.js";
import { isAddMessageSuccess } from "./util.js";
export const access_chatCollection = async (usersArr) => {
  try {
    const usersArrSwitched = [usersArr[1], usersArr[0]];
    const findChat = await Chat.findOne({
      $or: [{ users: usersArr }, { users: usersArrSwitched }],
    });
    const isSuccess = findChat ? true : false;
    if (!isSuccess) {
      const newChat = await Chat.create({ users: usersArr });
      const isSuccess = newChat ? true : false;
      return isSuccess;
    }
    return isSuccess;
  } catch (error) {
    throw new Error(error);
  }
};

export const addMessageToChat = async (
  chatId,
  content,
  translated,
  sender,
  receiver
) => {
  const { usersArr, usersArrSwitched } = {
    usersArr: [sender, reciever],
    usersArrSwitched: [reciever, sender],
  };
  const newMsgObj = {
    sender: sender,
    receiver: receiver,
    contentOriginal: content,
    contentTranslated: translated,
    createdAt: new Date().toLocaleString("en-US", {
      timeZone: "Asia/Jerusalem",
      hour12: false,
      timeZoneName: "short",
    }),
  };
  const options = { new: true, runValidators: true };
  try {
    const updatedChat = await Chat.findOneAndUpdate(
      { $or: [{ users: usersArr }, { users: usersArrSwitched }] },
      { $push: { messagesHistory: newMsgObj } },
      options
    );
    const messagesHistory = updatedChat.messagesHistory;
    return isAddMessageSuccess(messagesHistory, content);
  } catch (error) {
    throw new Error(error);
  }
};
