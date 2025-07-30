// Import Mongoose to define the schema and interact with MongoDB
import mongoose from "mongoose";
// Import bcryptjs to securely hash passwords
import bcrypt from "bcryptjs";

// Define a schema (structure) for the User collection in MongoDB
const userSchema = new mongoose.Schema({
  // Define the username field
  username: {
    type: String, // The field is a string (e.g., an email or username)
    required: true, // This field must be provided when creating a user
    unique: true, // Ensures no two users can have the same username
    minLength: 8, // The username must be at least 8 characters long
  },
  // Define the password field
  password: {
    type: String, // The field is a string (the password)
    required: true, // This field must be provided
    minLength: 8, // The password must be at least 8 characters long
  },
});

// Before saving a user to the database, run this function
userSchema.pre("save", async function (next) {
  // Check if the password field has been modified (e.g., new user or password change)
  if (this.isModified("password")) {
    // Hash the password with bcrypt using a salt factor of 10 (higher number = more secure but slower)
    this.password = await bcrypt.hash(this.password, 10);
  }
  // Call next() to proceed with saving the user
  next();
});

// Add a custom method to the User schema to compare passwords during login
userSchema.methods.comparePassword = async function (password) {
  // Compare the provided password with the hashed password stored in the database
  return await bcrypt.compare(password, this.password);
};

// Create a User model based on the schema, which will represent the "users" collection in MongoDB
const User = mongoose.model("User", userSchema);

// Export the User model to use it in other files
export default User;
