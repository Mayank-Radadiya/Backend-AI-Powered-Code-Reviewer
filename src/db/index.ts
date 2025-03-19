import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI!;

const connectDB = async () => {
  try {
    const ConnectionObj = await mongoose.connect(MONGODB_URI);
    console.log(`DB connected: ${ConnectionObj.connection.host}`);
  } catch (error) {
    console.error("Error connecting to the database:", error);
    process.exit(1); // Exit the process with failure
  }
};

export default connectDB;
