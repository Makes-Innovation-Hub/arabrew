import dotenv from "dotenv";
import path from "path";
import asyncHandler from "../../middleware/asyncHandler.js";
import { WebSocket, WebSocketServer } from "ws";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config();
// dotenv.config({ path: __dirname + "../../.env" });
// console.log('__dirname + "./../../.env"', __dirname + "./../../.env");

// const wss = new WebSocketServer({ port: process.env.WEB_SOCKET_PORT });

const clients = [];
const room = {};

export const startChat = asyncHandler(async (req, res, next) => {
  // wss.on("connection", (ws) => {
  //   clients.push(ws);
  //   room[req.params.id1 + req.params.id2] = ws;
  //   ws.send(JSON.stringify({ msg: "hello there , u are ONLINE" }));
  //   ws.on("message", (data) => {
  //     clients.forEach((client) => {
  //       if (client.readyState === WebSocket.OPEN) {
  //         client.send(data.toString());
  //       }
  //     });
  //   });
  //   ws.on("close", () => {
  //     console.log(" User Disconnected ");
  //   });
  //   ws.onerror = function () {
  //     console.log("Some Error ocurred ");
  //   };
});

// const userInfo = req.body;
// const newUser = await User.create(userInfo);
// if (!newUser) {
//   return next(new Error("error registering user", newUser));
// }
// return res.status(200).json({
//   success: true,
//   data: newUser,
// });
// });
