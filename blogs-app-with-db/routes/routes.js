import { Router } from "express";
import Blog from "../models/blog.js";
const router = Router();

router.route("/").get((req, res) => {
  res.render("Home");
});

router
  .route("/compose")
  .get((req, res) => {
    res.render("Compose");
  })
  .post(async (req, res) => {
    try {
      const { title, content } = req.body;

      const newBlog = new Blog({
        title,
        content,
      });

      newBlog.save();
      console.log(newBlog);
      res.redirect("/blogs");
    } catch (err) {
      console.log(err);
      res.status(400).json({ message: "Failed to add blog" });
    }
  });

router.route("/blogs").get(async (req, res) => {
  try {
    const blogs = await Blog.find({});

    res.render("Blogs", {
      data: blogs.length > 0 ? blogs : "No Blogs Found",
    });
  } catch (err) {
    console.log(err);
    res.render("Blogs", {
      data: [],
    });
  }

  res.render("Blogs");
});

export default router;
