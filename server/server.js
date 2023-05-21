import path from "path";
import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import { WebSocket, WebSocketServer } from "ws";
import { fileURLToPath } from "url";
import connectDB from "./config/db.js";
import userRoutes from "./api/user/user.routes.js";
import errorHandler from "./middleware/errorHandler.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: __dirname + "/.env" });

const wss = new WebSocketServer({ port: process.env.WEB_SOCKET_PORT });

const app = express();
app.use(express.json());
app.use(cors());

const rooms = {};
const clients = [];

connectDB();

wss.on("connection", (ws) => {
  clients.push({ room: ws.id, client: ws });
  rooms[ws.id] = ws;
  ws.send(JSON.stringify({ msg: "hello there , u are ONLINE" }));
  ws.on("message", (data) => {
    clients.forEach((client) => {
      if (client.client.readyState === WebSocket.OPEN) {
        client.client.send(data.toString());
      }
    });
  });
  ws.on("close", () => {
    console.log(" User Disconnected ");
  });
  ws.onerror = function () {
    console.log("Some Error ocurred ");
  };
});

app.use("/user-data", userRoutes);

app.use(errorHandler);

const PORT = process.env.PORT || 5012;

const server = app.listen(
  PORT,
  console.log(
    `server is running in ${process.env.NODE_ENV} Mode, & made on port ${PORT}`
  )
);

process.on("unhandledRejection", async (err, promise) => {
  console.log(`Error: ${err.message}`);
  server.close(() => process.exit(1));
  await wss.close();
});
