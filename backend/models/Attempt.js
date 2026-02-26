import mongoose from "mongoose";

const AttemptSchema = new mongoose.Schema(
  {
    assignmentId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Assignment",
    },
    query: String,
  },
  { timestamps: true }
);

export default mongoose.model("Attempt", AttemptSchema);