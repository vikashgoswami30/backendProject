import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
  try {
    console.log(process.env.MONGO_URI)
    const connectInstance = await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`); // Add a `/` between URI and DB_NAME
    console.log(`\n MongoDB Connected! DB host: ${connectInstance.connection.host}`); // Use backticks for string interpolation
  } catch (error) {
    console.error(`Error: ${error.message}`); // Log a clearer error message
    process.exit(1);
  }
};

export default connectDB;
