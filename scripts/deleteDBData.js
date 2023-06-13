import assert from "assert";
import fetch from "node-fetch";
import mongoose from "mongoose";
import User from "../server/api/user/user.js";
import Chat from "../server/api/chat/chat.js";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: __dirname + "/../server/.env" });

const deleteDBData = async () => {
  let conn;
  try {
    conn = await mongoose.connect(
      process.env.NODE_ENV === "development"
        ? process.env.MONGO_URI_DEVELOPMENT
        : process.env.MONGO_URI_PRODUCTION,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    await User.deleteOne({ subId: "-1" });
    await User.deleteOne({ subId: "-2" });
    await User.deleteOne({ subId: "-3" });
    await Chat.deleteOne({ users: ["Sean-dev-test", "Saleh-dev-test"] });
  } catch (error) {
    console.error("Error deleting user:", error);
  } finally {
    await conn.disconnect();
  }
};

deleteDBData();
