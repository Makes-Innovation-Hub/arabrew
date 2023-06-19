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
    usersArr: [sender, receiver],
    usersArrSwitched: [receiver, sender],
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
    // console.log("usersArr", usersArr);
    // console.log("usersArrSwitched", usersArrSwitched);
    // console.log("newMsgObj", newMsgObj);
    // const updatedChat = await Chat.findOneAndUpdate(
    //   { $or: [{ users: usersArr }, { users: usersArrSwitched }] },
    //   { $push: { messagesHistory: newMsgObj } },
    //   options
    // );

    // const chat = fetch("http://localhost:5090/api/chat/Benny Solomon/Sean");
    // const chatObj = JSON.parse(chat);

    // const messagesHistory = updatedChat.messagesHistory;
    // return isAddMessageSuccess(messagesHistory, content);
    return newMsgObj;
  } catch (error) {
    throw new Error(error);
  }
};
