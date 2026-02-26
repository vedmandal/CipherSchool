import express from "express";
import {
  getAssignments,
  getAssignmentById,
} from "../controller/assignmentController.js";

const router = express.Router();


router.get("/", getAssignments);


router.get("/:id", getAssignmentById);

export default router;