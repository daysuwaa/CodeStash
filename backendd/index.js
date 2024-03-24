import dotenv from "dotenv";
dotenv.config();
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import router from "./routes/HomeRoutes.js";
import userRoutes from "./routes/user.js";
import morgan from "morgan";

const app = express();
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

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
