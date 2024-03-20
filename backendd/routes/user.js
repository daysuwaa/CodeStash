// Backend routes/user.js
import express from "express";
import { loginUser, signupUser } from "../userController.js";

const userRoutes = express.Router();

// Login route
userRoutes.post("/login", loginUser);

// Signup route
userRoutes.post("/signup", signupUser);

export default userRoutes;
