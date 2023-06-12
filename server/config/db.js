import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(
      process.env.NODE_ENV === "development"
        ? process.env.MONGO_URI_DEVELOPMENT
        : process.env.MONGO_URI_PRODUCTION,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log(`🙃🙃 Mongo DB is connected ${conn.connection.host} 🙃🙃`);
  } catch (Error) {
    console.log(`🏮🏮🏮 ${Error} 🏮🏮🏮`);
  }
};
export default connectDB;
