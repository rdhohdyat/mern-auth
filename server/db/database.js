import mongoose from "mongoose";

 const connectToDatabase = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB Connected : ${conn.connection.host}`);
  } catch (error) {
    console.log("Error connection to MongoDB", error.message);
    process.exit(1);
  }
};

export default connectToDatabase
