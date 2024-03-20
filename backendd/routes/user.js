// Backend routes/user.js
import express from "express";
import { loginUser, signinUser } from "../userController.js";

const router = express.Router();

// Login route
router.post("/login", loginUser);

// Signup route
router.post("/signin", signinUser);

export default router;
