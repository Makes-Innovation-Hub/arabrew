import mongoose from "mongoose";
const chatSchema = new mongoose.Schema(
  {
    users: {
      type: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "userCollection",
        },
      ],
      validate: [checkUsers, "chat with same ids exists,or missing receiverId"],
    },
    hub: {
      type: String,
      required: [
        true,
        "⛔⛔ chat type is missing should be work or hobbies ⛔⛔",
      ],
      enum: ["work", "hobbies"],
    },
    messages: [
      {
        sender: {
          type: mongoose.Types.ObjectId,
          ref: "userCollection",
        },
        originalContent: { type: String, required: true },
        translatedContent: { language: String, content: String },
        date: { type: Date },
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

/**
 * hub - string hobbies/work
 * participants array
 * messages array (userId,original_content,translated_content[{lang"HE"||"AR":translation}],timestamp)
 */
