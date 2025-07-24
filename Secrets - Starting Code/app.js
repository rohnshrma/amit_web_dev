//jshint esversion:6

import express from "express";

import connectDB from "./config/db.js";
import routes from "./routes/routes.js";
import dotenv from "dotenv";

const app = express();

const PORT = process.env.PORT || 3000;

dotenv.config();

connectDB();

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");

app.use(routes);

app.listen(PORT, () => {
  console.log("server started on port ", PORT);
});
