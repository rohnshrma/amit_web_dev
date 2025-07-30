//jshint esversion:6

import express from "express";
import session from "express-session";
import User from "./models/User.js";
import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";
import connectDB from "./config/db.js";
import flash from "connect-flash";
import routes from "./routes/routes.js";
import dotenv from "dotenv";

const app = express();

const PORT = process.env.PORT || 3000;

dotenv.config();

connectDB();

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
  })
);

app.use(flash());
app.use(passport.initialize());
app.use(passport.session());

passport.use(
  new LocalStrategy(async (username, password, cb) => {
    try {
      const user = await User.findOne({ username });
      if (!user) {
        return cb(null, false, { message: "incorrect username" });
      }

      const isMatch = await user.comparePassword(password);
      if (!isMatch) {
        return cb(null, false, { message: "incorrect password" });
      }

      return cb(null, user);
    } catch (err) {
      return cb(err);
    }
  })
);

passport.serializeUser((user, cb) => {
  cb(null, user.id);
});

passport.deserializeUser(async (id, cb) => {
  try {
    const user = await User.findById(id);
    cb(null, user);
  } catch (err) {
    cb(err);
  }
});

app.use((req, res, next) => {
  res.locals.error = req.flash("error");
  res.locals.success = req.flash("success");
  res.locals.user = req.user || null;
  next();
});
// routes
app.use(routes);

app.listen(PORT, () => {
  console.log("server started on port ", PORT);
});
