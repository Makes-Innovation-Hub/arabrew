import mongoose from "mongoose";

const MSG_EXP_IN_SEC = 2_592_000;

const MessageSchema = new mongoose.Schema(
  {
    chatId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "ChatModel",
      required: [true, "message is not assigned to chat "],
    },
    sender: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "userModel",
      required: [true, "provide a sender Id "],
    },
    content: {
      type: String,
      required: [true, "empty Content!"],
    },
  },
  {
    timestamps: true,
    versionKey: false,
    toJSON: {
      transform: function (doc, ret) {
        ret.id = ret._id;
        delete ret._id;
      },
    },
    toObject: {
      transform: function (doc, ret) {
        ret.id = ret._id;
        delete ret._id;
      },
    },
  }
);
MessageSchema.index({ createdAt: 1 }, { expireAfterSeconds: MSG_EXP_IN_SEC });

const MessageModel = mongoose.model("MessageModel", MessageSchema);
export default MessageModel;
