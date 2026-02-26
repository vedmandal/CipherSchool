import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
import connectMongo from "./config/mongo.js";


import assignmentRoutes from "./routes/assignmentRoutes.js";
import executionRoutes from "./routes/executionRoutes.js";
import hintRoutes from "./routes/hintRoutes.js";


import pool from "./config/postgres.js";

const app = express();

connectMongo();

app.use(cors());
app.use(express.json());

app.use("/api/assignments", assignmentRoutes);
app.use("/api/execute", executionRoutes);
app.use("/api/hint", hintRoutes);

app.listen(process.env.PORT || 5000, async () => {
  console.log("Server running...");

  try {
    const res = await pool.query("SELECT NOW()");
    console.log("Postgres Connected:", res.rows);
  } catch (err) {
    console.error("Postgres Error:", err.message);
  }
});