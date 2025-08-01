// Import Mongoose to define the schema and interact with MongoDB
import mongoose from "mongoose";

// Import bcryptjs to securely hash passwords
import bcrypt from "bcryptjs";

// Define a schema (structure) for the User collection in MongoDB
const userSchema = new mongoose.Schema({
  // Define the username field
  username: {
    type: String, // Specifies that the username is a string (e.g., an email or username)
    required: true, // Ensures the username field is mandatory
    unique: true, // Ensures no two users can have the same username in the database
    minLength: 8, // Enforces a minimum length of 8 characters for the username
  },
  // Define the password field
  password: {
    type: String, // Specifies that the password is a string
    minLength: 8, // Enforces a minimum length of 8 characters for the password
  },
  googleId: {
    type: String, // Stores the Google ID for users authenticating via Google OAuth
    unique: true, // Ensures no two users can have the same Google ID
  },
  name: {
    type: String, // Stores the user's display name (optional, e.g., from Google profile)
  },
});

// Before saving a user to the database, run this function
userSchema.pre("save", async function (next) {
  // Check if the password field has been modified (e.g., new user or password change)
  if (this.isModified("password")) {
    // Hash the password with bcrypt using a salt factor of 10 (higher number = more secure but slower)
    this.password = await bcrypt.hash(this.password, 10);
  }
  // Call next() to proceed with saving the user to the database
  next();
});

// Add a custom method to the User schema to compare passwords during login
userSchema.methods.comparePassword = async function (password) {
  // Compare the provided password with the hashed password stored in the database
  return await bcrypt.compare(password, this.password);
};

// Create a User model based on the schema, representing the "users" collection in MongoDB
const User = mongoose.model("User", userSchema);

// Export the User model to use it in other files
export default User;
