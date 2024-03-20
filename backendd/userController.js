// import { SECRET } from "./.env";
// import { User } from "./models/userModel.js";
// import jwt from "jsonwebtoken";
// //login user
// // userController.js
// const createToken = ({ _id }) => {
//   return jwt.sign({ _id }, SECRET, { expiresIn: "3d" });
// };
// // login user
// export const loginUser = async (req, res) => {
//   const { email, password } = req.body;
//   try {
//     const user = await User.login(email, password);

//     const token = createToken(user._id);

//     res.status(200).json({ email, token });
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// };

// export const signinUser = async (req, res) => {
//   const { email, password } = req.body;
//   try {
//     const user = await User.signin(email, password);

//     const token = createToken(user._id);

//     res.status(200).json({ email, token });

//     // create a token
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// };
import dotenv from "dotenv";
dotenv.config(); // Load environment variables from .env file

import { User } from "./models/userModel.js";
import jwt from "jsonwebtoken";

// Define a function to create JWT tokens
const createToken = ({ _id }) => {
  const secretKey = process.env.SECRET; // Access SECRET from environment variables
  return jwt.sign({ _id }, secretKey, { expiresIn: "3d" });
};

// Controller function to login a user
export const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.login(email, password); // Assuming User.login is defined in userModel.js

    const token = createToken(user._id); // Create JWT token using createToken function

    res.status(200).json({ email, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Controller function to sign in a user
export const signinUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.signin(email, password); // Assuming User.signin is defined in userModel.js

    const token = createToken(user._id); // Create JWT token using createToken function

    res.status(200).json({ email, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
