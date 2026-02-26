import express from "express";
import { getHint } from "../controller/hintController.js";

const router = express.Router();


router.post("/", getHint);

export default router;