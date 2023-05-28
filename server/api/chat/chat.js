import mongoose from "mongoose";
const chatSchema = new mongoose.Schema(
  {
    users: {
      type: [
        {
          trim: true,
          type: String,
        },
      ],
      validate: [checkUsers, "chat with same ids exists,or missing recieverId"],
    },

    messagesHistory: [
      {
        sender: {
          type: String,
          trim: true,
        },
        content: String,
        // content_HE:String,
        // content_AR:String,

        createdAt: {
          type: String,
        },
      },
    ],
  },
  {
    timestamps: true,
    versionKey: false,
    toJSON: {
      transform: function (doc, ret) {
        ret.id = ret._id;
        delete ret._id;
        delete ret.__v;
      },
    },
    toObject: {
      transform: function (doc, ret) {
        ret.id = ret._id;
        delete ret._id;
        delete ret.__v;
      },
    },
  }
);

async function checkUsers(usersArr) {
  try {
    const usersArrSwitched = [usersArr[1], usersArr[0]];
    const findChat1 = await ChatCollection.find({
      $or: [{ users: usersArr }, { users: usersArrSwitched }],
    });

    const doesChatExist =
      usersArr.length === 2 && findChat1.length < 1 ? true : false;

    return doesChatExist;
  } catch {
    throw new Error(`a chat between ${usersArr} already exists`);
  }
}

const ChatCollection = mongoose.model("ChatCollection", chatSchema);
export default ChatCollection;
