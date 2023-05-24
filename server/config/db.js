import mongoose from "mongoose";
import { log } from "../helpers/logger.js";
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    log.info(`🙃🙃 Mogbo DB is connected ${conn.connection.host} 🙃🙃`);
  } catch (Error) {
    log.error(`🏮🏮🏮 ${Error} 🏮🏮🏮`);
  }
};
export default connectDB;
