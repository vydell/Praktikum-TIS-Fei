require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bookRoutes = require("./routes/book.route"); //import book.route.js

mongoose.connect(process.env.MONGO_URI);
const db = mongoose.connection;

db.on("error", (error) => {
  console.log(error);
});

db.once("connected", () => {
  console.log("Mongo connected");
});

const app = express();
app.use(express.json());
app.use('/books', bookRoutes);  //use book.route.js


app.get("/", (req, res) => {
  res.status(200).json({
    message: "<Fayza Avieninda>,<235150700111030>",
  });
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Running on port ${PORT}`);
});
