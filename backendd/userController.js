import { SECRET } from "./config.js";
import { User } from "./models/userModel.js";
import jwt from "jsonwebtoken";
//login user
// userController.js
const createToken = ({ _id }) => {
  return jwt.sign({ _id }, SECRET, { expiresIn: "3d" });
};
// login user
export const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.login(email, password);

    const token = createToken(user._id);

    res.status(200).json({ email, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const signinUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.signin(email, password);

    const token = createToken(user._id);

    res.status(200).json({ email, token });

    // create a token
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
