import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: { type: String, required: true, unique: true, minLength: 8 },
    password: { type: String, required: true, minLength: 8 },
  },
  {
    timeseries: true,
  }
);

const User = mongoose.model("User", userSchema);

export default User;
