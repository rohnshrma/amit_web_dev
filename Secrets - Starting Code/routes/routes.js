// Import the Express Router to create modular routes
import { Router } from "express";
// Import the User model to interact with the users collection in MongoDB
import User from "../models/User.js";
// Import Passport for authentication (e.g., login handling)
import passport from "passport";

// Create a new Router instance to define routes
const router = Router();

// Middleware function to check if a user is authenticated (logged in)
function isAuthenticated(req, res, next) {
  // Log a message to the console for debugging
  console.log("checking auth");
  // Log the result of req.isAuthenticated() (true if user is logged in, false otherwise)
  console.log(req.isAuthenticated());

  // If the user is authenticated, proceed to the next middleware or route handler
  if (req.isAuthenticated()) {
    return next();
  }

  // If not authenticated, set an error message using flash (stores messages for one request)
  req.flash("error", "Please Login to view this page.");
  // Redirect the user to the login page
  res.redirect("/login");
}

// Route for the homepage (GET /)
router.route("/").get((req, res) => {
  // Render the "home" template (e.g., home.ejs)
  res.render("home");
});

// Routes for /register (both GET and POST)
router
  .route("/register")
  // GET request to display the registration page
  .get((req, res) => {
    // Render the "register" template (e.g., register.ejs)
    res.render("register");
  })
  // POST request to handle user registration
  .post(async (req, res, next) => {
    try {
      // Extract username and password from the form data (req.body)
      const { username, password } = req.body;

      // Check if a user with this username already exists
      const existingUser = await User.findOne({ username });
      if (existingUser) {
        // If username exists, set an error message and redirect to register page
        req.flash("error", "Username already exists.");
        return res.redirect("/register");
      }

      // Create a new user with the provided username and password
      const user = new User({
        username,
        password,
      });

      // Save the user to the database (password will be hashed automatically due to schema middleware)
      await user.save();

      // Log the user in after registration using Passport
      req.login(user, (err) => {
        if (err) return next(err); // Handle any login errors
        // Redirect to the secrets page after successful registration and login
        res.redirect("/secrets");
      });
    } catch (err) {
      // Log any errors during registration
      console.log("failed to create user ", err);
      // Set an error message and redirect to the register page
      req.flash("error", "Registration failed. Please Try Again.");
      res.redirect("/register");
    }
  });

// Routes for /login (both GET and POST)
router
  .route("/login")
  // GET request to display the login page
  .get((req, res) => {
    // Render the "login" template (e.g., login.ejs)
    res.render("login");
  })
  // POST request to handle login using Passport's local strategy
  .post(
    passport.authenticate("local", {
      // If login succeeds, redirect to the secrets page
      successRedirect: "/secrets",
      // If login fails, redirect to the login page
      failureRedirect: "/login",
      // Enable flash messages for login errors (e.g., wrong password)
      failureFlash: true,
    })
  );

// Route to initiate Google OAuth authentication
router.get(
  "/auth/google",
  // Start Google authentication, requesting access to user's profile and email
  passport.authenticate("google", { scope: ["profile", "email"] })
);

// Route to handle Google OAuth callback
router.get(
  "/auth/google/callback",
  // Process the Google authentication response
  passport.authenticate("google", {
    // If authentication succeeds, redirect to the secrets page
    successRedirect: "/secrets",
    // If authentication fails, redirect to the login page
    failureRedirect: "/login",
    // Enable flash messages for Google authentication errors
    failureFlash: { type: "error", message: "Google Authentication Failed" },
  })
);

// Route for the /secrets page (requires authentication)
router.get("/secrets", isAuthenticated, (req, res) => {
  // Render the "secrets" template if the user is authenticated
  res.render("secrets");
});

// Route for logging out (GET /logout)
router.get("/logout", (req, res, next) => {
  // Log the user out using Passport
  req.logout((err) => {
    if (err) return next(err); // Handle any logout errors
    // Set a success message and redirect to the homepage
    req.flash("success", "Successfully logged out");
    res.redirect("/");
  });
});

// Export the router to use it in the main application
export default router;
