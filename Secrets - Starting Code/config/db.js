// Import the Mongoose library, which helps connect and interact with MongoDB databases
import mongoose from "mongoose";

// Define an asynchronous function named connectDB to handle database connection
const connectDB = async () => {
  // Use a try-catch block to handle potential errors during connection
  try {
    // Attempt to connect to MongoDB using a connection string stored in an environment variable (MONGO_URI)
    // process.env.MONGO_URI is typically a URL like "mongodb://localhost:27017/databaseName"
    const conn = await mongoose.connect(process.env.MONGO_URI);
    // If connection is successful, log the host of the database (e.g., "localhost")
    console.log("Connected to ", conn.connection.host);
  } catch (err) {
    // If an error occurs during connection, log an error message
    console.log("Failed to connect to Database");
    // Exit the Node.js process with a failure code (1) to indicate something went wrong
    process.exit(1);
  }
};

// Export the connectDB function so it can be used in other files
export default connectDB;
