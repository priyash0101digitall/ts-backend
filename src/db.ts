import mongoose from "mongoose";

const connectDB = async (): Promise<void> => {
  try {
    const MONGODB_URI =
      process.env.DB_URI || "mongodb://localhost:27017/ts-test-db";
    await mongoose.connect(MONGODB_URI);
    console.log("MongoDB connected");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1);
  }
};

export default connectDB;
