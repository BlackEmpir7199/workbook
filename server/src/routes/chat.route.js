import express from "express";
import { generateToken } from "../config/stream.js";

const router = express.Router();

router.get("/token", generateToken)

export default router;