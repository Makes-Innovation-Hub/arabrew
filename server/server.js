import express from "express";
import dotenv from "dotenv";

import { WebSocket, WebSocketServer } from "ws";

const wss = new WebSocketServer({ port: 3005 });

dotenv.config();

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Server is ACTIVE  ");
});

const rooms = {};

const clients = [];

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

const PORT = process.env.PORT || 5005;

const server = app.listen(
  PORT,
  console.log(
    `server is running in ${process.env.NODE_ENV} Mode, & made on port ${PORT}`
  )
);

process.on("unhandledRejection", (err, promise) => {
  console.log(`Error: ${err.message}`);
  server.close(() => process.exit(1));
});
