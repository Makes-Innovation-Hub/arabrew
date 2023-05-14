import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import pino from "pino";

import connectDB from "./config/db.js";
import errorHandler from "./middleware/errorHandler.js";

import allRoutes from "./routes.js";

dotenv.config({ path:"/home/code-grinder/Documents/Makes Internship may-juni-23/Projects/Arabrew-chatapp/arabrew-repo/server/config/config.env" });

connectDB();



const app = express();
app.use(express.json());
app.use(cors());

// const logger=pino({
//   level:process.env.NODE_ENV!=="production"&&"info",
// })
if(process.env.NODE_ENV!=="production"){
  app.use(pino);
}

app.get("/", (req, res) => {
  res.send("Server is ACTIVE  ");
});

 app.use("/arabrew/v1",allRoutes)

app.use(errorHandler);

const PORT = process.env.PORT || 5000;

const server=app.listen(PORT,console.log(` ⭐⭐server is running in ${process.env.NODE_ENV} Mode, & made on port ${PORT} ⭐⭐`))

process.on('unhandledRejection',(err,promise)=>{
    console.log(`😡😡 Error: ${err.message} 😡😡`);
    server.close(()=>process.exit(1))
})
