import { Router } from "express";
import User from "../models/User.js";
import md5 from "md5";

const router = Router();

router.route("/").get((req, res) => {
  res.render("home");
});
router
  .route("/register")
  .get((req, res) => {
    res.render("register");
  })
  .post(async (req, res) => {
    try {
      const { username, password } = req.body;

      const existingUser = await User.findOne({ username });
      if (existingUser) return res.redirect("/register");

      const user = new User({
        username,
        password: md5(password),
      });

      await user.save();
      res.render("secrets");
    } catch (err) {
      console.log("failed to create user ", err);
      res.redirect("/register");
    }
  });
router
  .route("/login")
  .get((req, res) => {
    res.render("login");
  })
  .post(async (req, res) => {
    try {
      const { username, password } = req.body;

      const existingUser = await User.findOne({ username });
      if (!existingUser) {
        console.log("user not exists");
        return res.redirect("/register");
      }

      if (existingUser.password === md5(password)) {
        res.render("secrets");
      } else {
        console.log("incorrect password");
        res.redirect("/login");
      }
    } catch (err) {
      console.log("failed to create user ", err);
      res.redirect("/register");
    }
  });

export default router;
