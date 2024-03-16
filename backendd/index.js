import express from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import { Code } from "./models/codeModel.js";
import cors from "cors";
import router from "./routes/HomeRoutes.js";

const app = express();
// Add body parsing middleware
app.use(express.json());

//middleware for handling CORS policy
app.use(cors());

// app.use(
//   cors({
//     origin: "http://localhost:3000",
//     methods: ["GET", "POST", "PUT", "DELETE"],
//     allowedHeaders: ["Content-Type"], // Corrected
//   })
// );

// app.use(
//   cors({
//     origin: "http://localhost:5174",
//     methods: ["GET", "POST", "PUT", "DELETE"],
//     allowedHeaders: ["Content-Type"],
//   })
// );

app.get("/", (req, res) => {
  console.log(req);
  return res.status(234).send(`hello, i'm daysuwaa!`);
});

app.use("/codes", router);

mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log(`App connected to database`);
    app.listen(PORT, () => {
      console.log(`App is listening to port : ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
