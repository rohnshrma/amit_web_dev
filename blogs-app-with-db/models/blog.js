import mongoose from "mongoose";
import { type } from "os";

const blogSchema = new mongoose.Schema(
  {
    title: { type: "String", required: true, unique: true, minLength: 20 },
    content: { type: "String", required: true, minLength: 200 },
  },
  { timeseries: true }
);

const Blog = mongoose.model("Blog", blogSchema);

export default Blog;
