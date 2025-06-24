// Import the Express framework to create a web server
import express from "express";

// Import body-parser middleware to parse incoming request bodies (e.g., form data)
import bodyParser from "body-parser";

// Create an instance of an Express application
const app = express();

// Define the port number where the server will listen for requests
const PORT = 3000;

// Middleware: Code that runs between the request and response

// Commented-out middleware that would log the request's status code, URL, and path
// app.use((req, res, next) => {
//   console.log(req.statusCode, req.url, req.path);
//   next(); // Calls the next middleware or route handler in the stack
// });

// Serve static files (e.g., CSS, images, JavaScript) from the "public" directory
// Express will automatically look for files in this folder when requested
app.use(express.static("public"));

// Use body-parser middleware to parse URL-encoded form data
// `extended: true` allows parsing of nested objects in the request body
app.use(bodyParser.urlencoded({ extended: true }));

// Define routes: Handlers for specific URL paths and HTTP methods

// Route for the homepage (root URL: "/")
app
  .route("/") // Define a route for the root path
  .get((req, res) => {
    // Handle GET requests to "/"
    // Send the index.html file from the "pages" directory
    // process.cwd() returns the current working directory of the Node.js process
    res.sendFile(process.cwd() + "/pages/index.html");
  });

// Route for the "/about" page
app
  .route("/about") // Define a route for the "/about" path
  .get((req, res) => {
    // Handle GET requests to "/about"
    // Send the about.html file from the "pages" directory
    res.sendFile(process.cwd() + "/pages/about.html");
  });

// Route for the "/contact" page, handling both GET and POST requests
app
  .route("/contact") // Define a route for the "/contact" path
  .get((req, res) => {
    // Handle GET requests to "/contact"
    // Send the contact.html file from the "pages" directory
    res.sendFile(process.cwd() + "/pages/contact.html");
  })
  .post((req, res) => {
    // Handle POST requests to "/contact" (e.g., form submissions)
    // Log the parsed form data from the request body (requires body-parser)
    console.log(req.body);
    // Note: No response is sent back here, so the client may hang
    // Consider adding res.send() or res.redirect() to complete the response
  });

// Catch-all route for undefined paths (e.g., 404 Not Found)
app
  .route("/:route") // ":route" is a dynamic parameter capturing any unmatched path
  .get((req, res) => {
    // Handle GET requests to any unmatched route
    // Log the current working directory for debugging
    console.log(process.cwd());
    // Send the 404.html file from the "pages" directory
    res.sendFile(`${process.cwd()}/pages/404.html`);
  });

// Start the Express server and listen for incoming requests on the specified port
app.listen(PORT, () => {
  // Log a message to the console when the server starts successfully
  console.log("server started on port ", PORT);
});
