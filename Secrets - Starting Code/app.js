// jshint esversion:6
// Enables ES6 syntax checking for JSHint (a linter tool, though not strictly necessary here)

// Import Express to create the web server
import express from "express";
// Import express-session to manage user sessions
import session from "express-session";
// Import the User model to interact with the users collection
import User from "./models/User.js";
// Import Passport for authentication handling
import passport from "passport";
// Import Passport's Local Strategy for username/password authentication
import { Strategy as LocalStrategy } from "passport-local";
// Import Passport's Google Strategy for Google OAuth authentication
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
// Import database connection function
import connectDB from "./config/db.js";
// Import connect-flash for flash messages (temporary messages for user feedback)
import flash from "connect-flash";
// Import routes defined in a separate file
import routes from "./routes/routes.js";
// Import dotenv to load environment variables from a .env file
import dotenv from "dotenv";

// Initialize the Express application
const app = express();

// Set the port to an environment variable or default to 3000
const PORT = process.env.PORT || 3000;

// Load environment variables from .env file
dotenv.config();

// Connect to MongoDB database
connectDB();

// Serve static files (e.g., CSS, JS, images) from the "public" directory
app.use(express.static("public"));
// Parse URL-encoded form data (e.g., from HTML forms)
app.use(express.urlencoded({ extended: true }));
// Set EJS as the templating engine for rendering views
app.set("view engine", "ejs");

// Configure session middleware to manage user sessions
app.use(
  session({
    secret: process.env.SESSION_SECRET, // Secret key for signing session cookies (stored in .env)
    resave: false, // Don't resave session if unmodified
    saveUninitialized: false, // Don't save uninitialized sessions
  })
);

// Initialize flash middleware for temporary messages (e.g., login errors)
app.use(flash());
// Initialize Passport for authentication
app.use(passport.initialize());
// Enable Passport to use sessions for persistent login
app.use(passport.session());

// Configure Passport's Local Strategy for username/password authentication
passport.use(
  new LocalStrategy(async (username, password, cb) => {
    try {
      // Find a user by username in the database
      const user = await User.findOne({ username });
      // If no user is found, return an error message
      if (!user) {
        return cb(null, false, { message: "incorrect username" });
      }

      // Check if the provided password matches the stored hashed password
      const isMatch = await user.comparePassword(password);
      // If password doesn't match, return an error message
      if (!isMatch) {
        return cb(null, false, { message: "incorrect password" });
      }

      // If authentication succeeds, return the user object
      return cb(null, user);
    } catch (err) {
      // Handle any errors during authentication
      return cb(err);
    }
  })
);

// Configure Passport's Google Strategy for OAuth authentication
passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.CLIENT_ID, // Google OAuth client ID (from .env)
      clientSecret: process.env.CLIENT_SECRET, // Google OAuth client secret (from .env)
      callbackURL: "/auth/google/callback", // URL Google redirects to after authentication
    },
    async (accessToken, refreshToken, profile, cb) => {
      // Log the Google profile for debugging
      console.log("Google callback triggered", profile);
      try {
        // Find a user by Google ID or email
        let user = await User.findOne({
          $or: [
            { googleId: profile.id }, // Match by Google ID
            { username: profile.emails[0].value }, // Match by email
          ],
        });
        // If no user exists, create a new one
        if (!user) {
          user = new User({
            googleId: profile.id, // Store Google ID
            username: profile.emails[0].value, // Use email as username
            name: profile.displayName, // Store display name
          });
          await user.save(); // Save the new user
        } else if (!user.googleId) {
          // If user exists but no Google ID, link the Google account
          user.googleId = profile.id;
          user.name = user.name || profile.displayName;
          await user.save();
        }
        // Return the user object for successful authentication
        return cb(null, user);
      } catch (err) {
        // Log and handle any errors during Google authentication
        console.log("Error in Google callback:", err);
        return cb(err);
      }
    }
  )
);

// Serialize user to store in session (store only the user ID)
passport.serializeUser((user, cb) => {
  cb(null, user.id);
});

// Deserialize user from session (retrieve user by ID)
passport.deserializeUser(async (id, cb) => {
  try {
    // Find the user by ID in the database
    const user = await User.findById(id);
    // Return the user object
    cb(null, user);
  } catch (err) {
    // Handle any errors during deserialization
    cb(err);
  }
});

// Middleware to make flash messages and user data available to all templates
app.use((req, res, next) => {
  res.locals.error = req.flash("error"); // Store error messages in res.locals
  res.locals.success = req.flash("success"); // Store success messages in res.locals
  res.locals.user = req.user || null; // Store the authenticated user (or null if not logged in)
  next(); // Proceed to the next middleware or route
});

// Use the routes defined in routes.js
app.use(routes);

// Start the server and listen on the specified port
app.listen(PORT, () => {
  // Log a message when the server starts
  console.log("server started on port ", PORT);
});
