import mongoose, { mongo } from "mongoose";
import { ENV } from "./env.js";

export const connectToDB = async () => {
  try {
    await mongoose.connect(ENV.MONGO_URI);
    console.log("Db connection success");
  } catch (err) {
    console.log("Db connection Failed" + err);
    process.exit(1);
  }
};
