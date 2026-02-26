import express from "express";
import validateQuery from "../middleware/validateQuery.js";
import { executeQuery } from "../controller/executionController.js";

const router = express.Router();

router.post("/", validateQuery, executeQuery);

export default router;