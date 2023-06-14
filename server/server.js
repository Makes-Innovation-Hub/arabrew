import path from "path";
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { Server } from "socket.io";
import { fileURLToPath } from "url";
import routes from "./routes.js";
import connectDB from "./config/db.js";

import {
  access_chatCollection,
  addMessageToChat,
} from "./utils/chat_socketIo.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: __dirname + "/.env" });

const wss = new WebSocketServer({ port: process.env.WEB_SOCKET_PORT });

const app = express();
app.use(express.json());
app.use(cors());
connectDB();

app.use("/api", routes);

app.use(express.static(path.join(__dirname, "../client/dist")));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/dist/index.html"));
});

const PORT = process.env.PORT || 5050;

const server = app.listen(
  PORT,
  console.log(
    `📶 server is running in ${process.env.NODE_ENV} Mode, & made on port ${PORT} 📶`
  )
);

const socket_io = new Server(server, {
  pingTimeout: 60000,
  cors: {
    origin: "*",
  },
});

socket_io.on("connection", (socket) => {
  console.log("🟢🟢 Socket.io is active 🟢🟢");
  socket.on("room_setup", (chatData) => {
    const { chatId, sender, reciever } = chatData;
    access_chatCollection([sender, reciever])
      .then((isSuccess) => {
        if (!isSuccess)
          throw new Error("error by finding chat , in room_setup");
        socket.join(chatId);
      })
      .catch((err) => console.error(err));
  });
  socket.on("new_message", (newMsg) => {
    const { chatId, content, sender, reciever } = newMsg;
    addMessageToChat(sender, reciever, content)
      .then((isSuccess) => {
        if (!isSuccess) throw new Error("failed adding new MSg (server.js)");
        //*send the message back to the sender
        socket.emit("message_to_sender", newMsg);
        //*send the message to the reciever
        socket.in(chatId).emit("message_to_reciever", newMsg);
      })
      .catch((err) => console.error(err));
  });
  socket.on("disconnect", (data) => console.log(data));
});
process.on("unhandledRejection", async (err, promise) => {
  console.log(`Error: ${err.message}`);
  server.close(() => process.exit(1));
});
