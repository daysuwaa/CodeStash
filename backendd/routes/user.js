// import express from "express";

// // controller functions
// // const { loginUser, signinUser } = require("../userController");
// import loginUser from "../userController";
// import signinUser from "../userController";

// const router = express.Router();

// // login route
// router.post("/login", loginUser);

// //signup route
// router.post("/signin", signinUser);
// // module.exports = router;
// export default router;
//login user
import express from "express";
import { loginUser, signinUser } from "../userController.js";

const router = express.Router();

// login route
router.post("/login", loginUser);

//signup route
router.post("/signin", signinUser);

export default router;
