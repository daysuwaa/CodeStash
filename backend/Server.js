const express = require("express");
const mongoose = require("mongoose");

require("dotenv").config();

const codeRoute = require("./routes/Coderoute");
const stashedroutes = require("./routes/Stashedroute");

const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 4000; // Change 3000 to a different port number

app.use(express.json());
app.use(cors());

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected..."))
  .catch((err) => {
    console.error("MongoDB connection error:", err);
    process.exit(1); // Exit the process if unable to connect to MongoDB
  });

app.use("/coderoutes", codeRoute.router);
// app.use("/stashedroutes", stashedroutes);
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
