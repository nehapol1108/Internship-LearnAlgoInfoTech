// imports
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const connectDB = require("./config/connectDb");
const apiRoutes = require("./routes/apiRoutes");


const PORT = process.env.PORT || 5000;

// middlewares
const app = express();
mongoose.set("strictQuery", true);

app.use(express.json());
app.use(cors({ origin: true, credentials: true }));

// db connect
connectDB();

// apis
app.use("/",apiRoutes);

app.get("/", (req, res) => {
  res.status(200).send("hello world");
});

// listening
app.listen(PORT, () => {
  console.log(`listing to PORT ${PORT} `);
});
