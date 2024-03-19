import jwt from "jsonwebtoken";
// import { SECRET } from "../config.js";
import User from "../models/userModel.js";

// require auth for lal codestash route
const requireAuth = async (req, res, next) => {
  // verify authetication

  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({ error: "Authorization token required" });
  }
  const token = authorization.split(" ")[1];

  try {
    const { _id } = jwt.verify(token, SECRET);

    req.user = await User.findOne({ _id }).select("_id");
    next();
  } catch (error) {
    console.log(error);
    res.status(401).json({ error: "Request is not authorized" });
  }
};

export default requireAuth;
