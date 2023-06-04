import assert from "assert";
import fetch from "node-fetch";
import mongoose from "mongoose";
import User from "../server/api/user/user.js";
import Chat from "../server/api/chat/chat.js";

const deleteDBData = async () => {
  let conn;
  try {
    conn = await mongoose.connect(
      "mongodb+srv://admin:admin@arabrew-chat-cluster.kp8fvwt.mongodb.net/?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    await User.deleteOne({ name: "Benny" });
    await User.deleteOne({ name: "Sean" });
    await User.deleteOne({ name: "Saleh" });
    await Chat.deleteOne({ users: ["Sean", "Saleh"] });
  } catch (error) {
    console.error("Error deleting user:", error);
  } finally {
    await conn.disconnect();
  }
};

deleteDBData();
