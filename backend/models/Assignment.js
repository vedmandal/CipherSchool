import mongoose from "mongoose";

const AssignmentSchema = new mongoose.Schema(
  {
    title: String,
    description: String,
    difficulty: {
      type: String,
      enum: ["easy", "medium", "hard"],
    },
    schemaInfo: String,
  },
  { timestamps: true }
);

export default mongoose.model("Assignment", AssignmentSchema);