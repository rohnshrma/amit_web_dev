import express from "express";
import connectDB from "./config/db.js";
import mongoose from "mongoose";
import { type } from "os";
const app = express();
const PORT = 3000;

connectDB();

const taskSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, minLength: 8 },
    status: {
      enum: ["pending", "completed"],
      default: "pending",
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

// model
const Task = mongoose.model("task", taskSchema);

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

app.use(express.static("public"));

// routes

// home
app
  .route("/")
  .get(async (req, res) => {
    try {
      const fetchedTasks = await Task.find({});
      console.log(fetchedTasks);

      res.render("Home", {
        date: new Date().toLocaleDateString(),
        title: "To-Do List",
        data: fetchedTasks.length > 0 ? fetchedTasks : "No Tasks Found",
      });
    } catch (err) {
      console.log(err);
    }
  })
  .post(async (req, res) => {
    try {
      const { title, status } = req.body;
      // const newTask = new Task({
      //   title: title,
      //   status: status,
      // });
      const newTask = new Task({
        title,
        status,
      });

      await newTask.save();
      console.log(newTask);
      res.redirect("/");
    } catch (err) {
      console.log(err);
    }
  });

app.listen(PORT, () => {
  console.log("Server started on port :", PORT);
});
