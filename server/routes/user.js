import { getUser } from "../controllers/user.js";
import {verifyToken} from "../middlewares/auth.js";
import User from "../models/User.js";
import express from "express";
const router = express.Router();

router.get("/:id", getUser);

export default router;