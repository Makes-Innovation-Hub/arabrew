import mongoose from "mongoose";
import { log } from "../index.js";
const chatSchema = new mongoose.Schema(
  {
    users: {
      type: [
        {
          // type: mongoose.Schema.Types.ObjectId,
          type: String,
          // ref: "userModel",
        },
      ],
      validate: [
        checkUsers,
        "chat with same ids exists,or missing recieverId  ",
      ],
    },

    latestMessage: {
      // type: mongoose.Schema.Types.ObjectId,
      type: String,

      // ref: "messageModel",
    },
  },
  {
    timestamps: true,
    versionKey: false,
    toJSON: {
      transform: function (doc, ret) {
        delete ret._id;
      },
    },
    toObject: {
      transform: function (doc, ret) {
        delete ret._id;
      },
    },
  }
);
// chatSchema.index(
//   { users: 1 },
//   { unique: true}
// );
async function checkUsers(usersArr) {
  try {
    const isChat = await ChatModel.find({ users: { $all: usersArr } });
    const isChatSwitched = await ChatModel.find({
      users: { $all: [usersArr[1], usersArr[0]] },
    });

    log.info(isChatSwitched);

    // if(usersArr.length<2) throw new Error(`cannot open a chat with one user`);
    // if(isChat.length!==0) throw new Error(`a chat between ${usersArr} already exists`);
    return usersArr.length === 2 &&
      isChat.length < 1 &&
      isChatSwitched.length < 1
      ? true
      : false;
  } catch (err) {
    throw new Error(`a chat between ${usersArr} already exists`);
  }
}
const ChatModel = mongoose.model("ChatModel", chatSchema);
export default ChatModel;
