import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import pino from "pino";
import { dirname } from "path";
import { fileURLToPath } from "url";
import mongoose from "mongoose";
import connectDB from "./config/db.js";
import errorHandler from "./middleware/errorHandler.js";

import allRoutes from "./routes.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

dotenv.config({
  path: `${__dirname}/config/config.env`,
});

connectDB();

const app = express();
app.use(express.json());
app.use(cors());

if (process.env.NODE_ENV !== "production") {
  app.use(pino);
}

app.get("/", (req, res) => {
  res.send("Server is ACTIVE  ");
});

app.use("/arabrew/v1", allRoutes);

app.use(errorHandler);

const PORT = process.env.PORT || 5000;

const server = app.listen(
  PORT,
  console.log(
    ` ⭐⭐server is running in ${process.env.NODE_ENV} Mode, & made on port ${PORT} ⭐⭐`
  )
);

process.on("unhandledRejection", (err, promise) => {
  console.log(`😡😡 Error: ${err.message} 😡😡`);

  mongoose.disconnect(()=>{
    server.close(() => process.exit(1));
  })
  
});
