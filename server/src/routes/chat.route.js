import express from "express";
import { generateStreamToken } from "../config/stream.js";

const router = express.Router();

router.get("/token", generateStreamToken)

export default router;