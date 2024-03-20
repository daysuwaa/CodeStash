// Backend routes/user.js
import express from "express";
import { loginUser, signinUser } from "../userController.js";

const userRoutes = express.Router();

// Login route
userRoutes.post("/login", loginUser);

// Signup route
userRoutes.post("/signup", signinUser);

export default userRoutes;
