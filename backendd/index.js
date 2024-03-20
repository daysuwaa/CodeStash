// import express from "express";
// import { PORT, mongoDBURL } from "./config.js";
// import mongoose from "mongoose";
// import cors from "cors";
// import router from "./routes/HomeRoutes.js";
// // eslint-disable-next-line no-undef, no-unused-vars
// import userRoutes from "./routes/user.js";

// const app = express();
// // Add body parsing middleware
// app.use(express.json());

// //middleware for handling CORS policy
// app.use(cors());
// // const dotenv = require("dotenv").config();

// // app.use(
// //   cors({
// //     origin: "http://localhost:3000",
// //     methods: ["GET", "POST", "PUT", "DELETE"],
// //     allowedHeaders: ["Content-Type"], // Corrected
// //   })
// // );

// // app.use(
// //   cors({
// //     origin: "http://localhost:5174",
// //     methods: ["GET", "POST", "PUT", "DELETE"],
// //     allowedHeaders: ["Content-Type"],
// //   })
// // );

// app.get("/", (req, res) => {
//   console.log(req);
//   return res.status(234).send(`hello, i'm daysuwaa!`);
// });

// app.use("/codes", router);
// // app.use("/codes/user", userRoutes);

// mongoose
//   .connect(mongoDBURL)
//   .then(() => {
//     console.log(`App connected to database`);
//     app.listen(PORT, () => {
//       console.log(`App is listening to port : ${PORT}`);
//     });
//   })
//   .catch((error) => {
//     console.log(error);
//   });
// import express from "express";
// // import { PORT, mongoDBURL } from "./.env";
// // import "dotenv/config";

// import mongoose from "mongoose";
// import cors from "cors";
// import router from "./routes/HomeRoutes.js";
// import userRoutes from "./routes/user.js"; // Importing userRoutes as default
// import dotenv from "dotenv";
// dotenv.config();

// const app = express();
// // Add body parsing middleware
// app.use(express.json());

// //middleware for handling CORS policy
// app.use(cors());

// app.get("/", (req, res) => {
//   console.log(req);
//   return res.status(234).send(`hello, i'm daysuwaa!`);
// });

// app.use("/codes", router);
// app.use("/codes/user", userRoutes); // Using userRoutes

// mongoose
//   .connect(mongoDBURL)
//   .then(() => {
//     console.log(`App connected to database`);
//     app.listen(PORT, () => {
//       console.log(`App is listening to port : ${PORT}`);
//     });
//   })
//   .catch((error) => {
//     console.log(error);
//   });
import dotenv from "dotenv";
dotenv.config();
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import router from "./routes/HomeRoutes.js";
import userRoutes from "./routes/user.js";

const app = express();
app.use(express.json());
app.use(cors());

// Debugging: Log the value of MONGODB_URL
console.log("MONGODB_URL:", process.env.MONGODB_URL);

app.get("/", (req, res) => {
  console.log(req);
  return res.status(234).send(`hello, i'm daysuwaa!`);
});

app.use("/codes", router);
app.use("/codes/user", userRoutes);

mongoose
  .connect(process.env.MONGODB_URL) // Use process.env.MONGODB_URL directly
  .then(() => {
    console.log(`App connected to database`);
    app.listen(process.env.PORT, () => {
      // Use process.env.PORT directly
      console.log(`App is listening to port : ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
