import express from "express";
import { config } from "dotenv";
import { connectDB } from "./config/db.js";

import blogRoutes from "./routes/routes.js";
const app = express();

config();

connectDB();

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");

// using routes
app.use(blogRoutes);

app.listen(process.env.PORT, () => {
  console.log("Server started on port ", process.env.PORT);
});
