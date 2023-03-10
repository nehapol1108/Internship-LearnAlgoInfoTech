// imports
const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const mongoose = require("mongoose");
const cookieParser = require('cookie-parser')
const cors = require("cors");
const apiRoutes = require("./routes/apiRoutes");
const path = require("path")

const app = express();
dotenv.config(); //import config.env file

const PORT = process.env.PORT || 7000;

// middlewares

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

app.use(express.static(path.join(__dirname,'../my-project/build')));
app.get('*',function(req,res){
  res.sendFile(path.join(__dirname,"../my-project/build/index.html"));
})

// listening
app.listen(PORT, () => {
  console.log(`listing to PORT ${PORT} `);
});

