import mongoose from "mongoose";

const connectMongo = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI,{family:4});
    console.log("MongoDB Connected");
  } catch (err) {
    console.error("Mongo Error:", err.message);
    process.exit(1);
  }
};

export default connectMongo;