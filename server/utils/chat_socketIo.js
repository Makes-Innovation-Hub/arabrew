import { Chat } from "../api/index.js";
import { isAddMessageSuccess } from "./util.js";
export const access_chatCollection = async (usersArr) => {
  // const { user1_name, user2_name } = req.params;
  // const users = { users: [user1_name, user2_name] };

  try {
    const usersArrSwitched = [usersArr[1], usersArr[0]];
    const findChat = await Chat.findOne({
      $or: [{ users: usersArr }, { users: usersArrSwitched }],
    });
    //!.lean();
    const isSuccess = findChat ? true : false;
    console.log("CHAT without lean()", findChat);
    if (!isSuccess) {
      const newChat = await Chat.create(usersArr);
      const isSuccess = newChat ? true : false;
      console.log(isSuccess);
      return isSuccess; //!
    }
    return isSuccess; //!
  } catch (error) {
    return next(error);
  }
};

// export const getChatByNames=async(usersArr)=>{
//   try{
//     const usersArrSwitched=[usersArr[1],usersArr[0]];
//     const findChat= await Chat.findOne({
//       $or: [{ users: usersArr }, { users: usersArrSwitched }],
//     })
//     if(!findChat)throw new Error("chat not found!!")
//   }
//   catch(err){
//     console.log("clg error",err)
//     next(err);

//   }
// }

export const addMessageToChat = async (sender, reciever, content) => {
  const { usersArr, usersArrSwitched } = {
    usersArr: [sender, reciever],
    usersArrSwitched: [reciever, sender],
  };
  const newMsgObj = {
    sender: sender,
    content: content,
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
    //!.lean();
    const messagesHistory = updatedChat.messagesHistory;
    return isAddMessageSuccess(messagesHistory, newMsgObj.createdAt);
  } catch (error) {
    next(error);
  }
};
