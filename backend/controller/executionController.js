import pool from "../config/postgres.js";
import Attempt from "../models/Attempt.js";

export const executeQuery = async (req, res) => {
  const { assignmentId, query } = req.body;

  try {
    const result = await pool.query(query);

    await Attempt.create({
      assignmentId,
      query,
    });

    res.json({
      rows: result.rows,
      rowCount: result.rowCount,
    });
  } catch (err) {
    res.status(400).json({
      error: err.message,
    });
  }
};