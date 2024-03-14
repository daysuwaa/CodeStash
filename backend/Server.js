// /* eslint-disable no-undef */
// const express = require("express");
// const mongoose = require("mongoose");

// require("dotenv").config();

// const codeRoute = require("./routes/Coderoute");
// const stashedroutes = require("./routes/Stashedroute");

// const cors = require("cors");

// const app = express();
// const PORT = process.env.PORT || 4100; // Change 3000 to a different port number

// app.use(express.json());
// app.use(cors());

// mongoose
//   .connect(process.env.MONGO_URI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => console.log("MongoDB connected..."))
//   .catch((err) => {
//     console.error("MongoDB connection error:", err);
//     process.exit(1); // Exit the process if unable to connect to MongoDB
//   });

// app.use("/coderoutes", codeRoute.router);
// app.use("/stashedroutes", stashedroutes);
// app.use("/api", routes);
// app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
/* eslint-disable no-undef */
// const express = require("express");
// const mongoose = require("mongoose");

// require("dotenv").config();

// const codeRoute = require("./routes/Coderoute");
// const stashedroutes = require("./routes/Stashedroute");

// const cors = require("cors");

// const app = express();
// const PORT = process.env.PORT || 4100; // Change 3000 to a different port number

// app.use(express.json());
// app.use(cors());

// mongoose
//   .connect(process.env.MONGO_URI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => console.log("MongoDB connected..."))
//   .catch((err) => {
//     console.error("MongoDB connection error:", err);
//     process.exit(1); // Exit the process if unable to connect to MongoDB
//   });

// // Use the router exported from codeRoute
// app.use("/coderoutes", codeRoute);

// // Use the router exported from stashedroutes
// app.use("/stashedroutes", stashedroutes);

// // Assuming you have a routes file, make sure to export the router from it as well
// // const routes = require("./routes/RoutesFile");

// // app.use("/api", routes);

// app.listen(PORT, () => console.log(`Listening on port ${PORT}`));

/* eslint-disable no-undef */
const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const codeRoute = require("./routes/Coderoute");
const stashedRoutes = require("./routes/Stashedroute");

const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 4100;

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
    process.exit(1);
  });

// Check this line to ensure you're importing Router instances
app.use("/coderoutes", codeRoute);
app.use("/stashedroutes", stashedRoutes);

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
