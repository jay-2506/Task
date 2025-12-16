import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const db = process.env.MONGO_URL;
const connectDB = async () => {
  try {
    await mongoose.connect(db, {});

    console.log("MongoDB Connected Successfully");
  } catch (error) {
    console.error("MongoDB Connection Failed");
    console.error(error.message);
  }
};

export default connectDB;
