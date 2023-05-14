import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import pino from "pino";

import connectDB from "./config/db.js";
import errorHandler from "./middleware/errorHandler.js";

import allRoutes from "./routes.js";

dotenv.config({ path: "./config/config.env" });
connectDB();

const app = express();
app.use(express.json());
app.use(cors());

if (process.env.NODE_ENV !== "production") {
  app.use(pino("dev"));
}

app.get("/", (req, res) => {
  res.send("Server is ACTIVE  ");
});

 app.use("/arabrew/v1",allRoutes)

app.use(errorHandler);

const server=app.listen(PORT,console.log(` ⭐⭐server is running in ${process.env.NODE_ENV} Mode, & made on port ${PORT} ⭐⭐`))

process.on('unhandledRejection',(err,promise)=>{
    console.log(`😡😡 Error: ${err.message} 😡😡`);
    server.close(()=>process.exit(1))
})
