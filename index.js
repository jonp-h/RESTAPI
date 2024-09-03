const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const routes = require("./routes/routes");

const mongoString = process.env.DATABASE_URL;
mongoose.connect(mongoString);
const database = mongoose.connection;

// Database on throws error if connection fails
database.on("error", (error) => {
  console.log(error);
});

// Runs only one time when connected to database
database.once("connected", () => {
  console.log("Database Connected");
});

const app = express();

app.use(express.json());

app.listen(3000, () => {
  console.log(`Server Started at ${3000}`);
});

// Base endpoint and routes. All endpoints start with /api
app.use("/api", routes);
