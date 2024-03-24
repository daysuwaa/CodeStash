import { User } from "./models/userModel.js";
import jwt from "jsonwebtoken";

// Define a function to create JWT tokens
const createToken = ({ _id }) => {
  const secretKey = process.env.SECRET; // Access SECRET from environment variables
  return jwt.sign({ _id }, secretKey, { expiresIn: "3d" });
};
// Controller function to login a user
export const loginUser = async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.login(username, password); // Assuming User.login is defined in userModel.js

    const token = createToken(user); // Create JWT token using createToken function

    res.status(200).json({ username, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Controller function to sign in a user
export const signupUser = async (req, res) => {
  const { email, password, username } = req.body;
  try {
    const user = await User.signup(email, password, username); // Assuming User.signin is defined in userModel.js

    //const token = createToken(user._id); // Create JWT token using createToken function

    return res.status(200).json({ email: email, username: username });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
