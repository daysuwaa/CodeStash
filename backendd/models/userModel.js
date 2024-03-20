import mongoose from "mongoose";
import bcyrpt from "bcrypt";
import * as argon from "argon2";
import validator from "validator";
const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

// static signin method
userSchema.statics.signup = async function (email, password) {
  //validation
  if (!email || !password) {
    throw Error("Email and password are required");
  }
  if (!validator.isEmail(email)) {
    throw Error("Email is not valid");
  }

  const exist = await this.findOne({ email });
  if (exist) {
    throw Error("Email already in use");
  }

  const hashedPassword = await argon.hash(password);

  const user = await this.create({ email, password: hashedPassword });
  return user;
};

// static login method
userSchema.statics.login = async function (email, password) {
  //validation
  if (!email || !password) {
    throw Error("Email and password are required");
  }
  const user = await this.findOne({ email });
  if (!user) {
    throw Error("Incorrect Email");
  }
  const match = await argon.verify(user.password, password);
  if (!match) {
    throw Error("Incorrect Password");
  }
  return user;
};

export const User = mongoose.model("User", userSchema);
export default User;
