import Assignment from "../models/Assignment.js";

export const getAssignments = async (req, res) => {
  try {
    const assignments = await Assignment.find().select(
      "title difficulty description"
    );
    res.json(assignments);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
};

export const getAssignmentById = async (req, res) => {
  try {
    const assignment = await Assignment.findById(req.params.id);
    if (!assignment) {
      return res.status(404).json({ error: "Not found" });
    }
    res.json(assignment);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
};