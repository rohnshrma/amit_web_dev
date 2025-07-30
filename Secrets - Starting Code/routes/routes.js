import { Router } from "express";
import User from "../models/User.js";
import passport from "passport";

const router = Router();

function isAuthenticated(req, res, next) {
  console.log("checking auth");

  console.log(req.isAuthenticated());

  if (req.isAuthenticated()) {
    return next();
  }

  req.flash("error", "Please Login to view this page.");
  res.redirect("/login");
}

router.route("/").get((req, res) => {
  res.render("home");
});

router
  .route("/register")
  .get((req, res) => {
    res.render("register");
  })
  .post(async (req, res, next) => {
    try {
      const { username, password } = req.body;

      const existingUser = await User.findOne({ username });
      if (existingUser) {
        req.flash("error", "Username aleady exists.");
        return res.redirect("/register");
      }

      const user = new User({
        username,
        password,
      });

      await user.save();

      req.login(user, (err) => {
        if (err) return next(err);
        res.redirect("/secrets");
      });
    } catch (err) {
      console.log("failed to create user ", err);
      req.flash("error", "Registration failed. Please Try Again.");
      res.redirect("/register");
    }
  });
router
  .route("/login")
  .get((req, res) => {
    res.render("login");
  })
  .post(
    passport.authenticate("local", {
      successRedirect: "/secrets",
      failureRedirect: "/login",
      failureFlash: true,
    })
  );

router.get("/secrets", isAuthenticated, (req, res) => {
  res.render("secrets");
});

router.get("/logout", (req, res, next) => {
  req.logout((err) => {
    if (err) return next(err);
    req.flash("success", "Successfully logged out");
    res.redirect("/");
  });
});

export default router;
