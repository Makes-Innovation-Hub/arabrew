import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { dirname } from "path";
import { fileURLToPath } from "url";
import { WebSocket, WebSocketServer } from "ws";

import connectDB from "./config/db.js";
import allRoutes from "./routes.js";
import mongoose from "mongoose";
import errorHandler from "./middleware/errorHandler.js";
import { log } from "./helpers/logger.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

dotenv.config({
  path: `${__dirname}/config/config.env`,
});

const wss = new WebSocketServer({ port: process.env.WEB_SOCKET_PORT });

const app = express();
app.use(express.json());
app.use(cors());

connectDB();

const rooms = {};

const clients = [];
app.use("/api", allRoutes);
app.use(errorHandler);
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

const PORT = process.env.PORT || 5050;

const server = app.listen(
  PORT,
  log.info(
    ` ⭐⭐server is running in ${process.env.NODE_ENV} Mode, & made on port ${PORT} ⭐⭐`
  )
);

process.on("unhandledRejection", (err, promise) => {
  log.error(`😡😡 Error: ${err.message} 😡😡`);

  mongoose.disconnect(() => {
    server.close(() => process.exit(1));
  });
  wss.close();
});
