// JavaScript is a synchronous, single-threaded language by default, but it supports asynchronous operations via callbacks, promises, and async/await.

// Function to fetch data from a URL and handle the response with a callback
function getData(url, cb) {
  // Create a new XMLHttpRequest object to make an HTTP request
  const request = new XMLHttpRequest();

  // Add an event listener for the 'readystatechange' event to track request progress
  request.addEventListener("readystatechange", () => {
    // Check if the request is complete (readyState 4) and successful (status 200)
    if (request.status === 200 && request.readyState === 4) {
      try {
        // Parse the response text (a JSON string) into a JavaScript object
        const data = JSON.parse(request.responseText);
        // Call the callback with the parsed data and no error
        cb(data, null);
      } catch (error) {
        // If JSON parsing fails, call the callback with no data and an error message
        cb(null, "Failed to parse response data");
      }
    }
    // Check if the request is complete (readyState 4) but failed (status not 200)
    if (request.status !== 200 && request.readyState === 4) {
      // Call the callback with no data and an error message
      cb(null, "Failed to fetch data: HTTP status " + request.status);
    }
  });

  // Configure the request: use the GET method to fetch data from the specified URL
  request.open("GET", url);

  // Send the request to the server
  request.send();
}

// Define the callback function to handle the result of the data fetch
function handleResult(data, err) {
  // Check if an error was passed to the callback
  if (err) {
    // Log the error message to the console if an error exists
    console.log("Error:", err);
  } else {
    // Log the fetched data (now a parsed object) to the console if no error
    console.log("Data:", data);
  }
}

// Call the getData function with a sample URL and the handleResult callback
getData("https://jsonplaceholder.typicode.com/users/1", handleResult);

// Comments explaining XMLHttpRequest readyState values:
// 0: Request not initialized (before open() is called)
// 1: Server connection established (after open() is called)
// 2: Request received (after send() is called)
// 3: Processing request (partial data is being downloaded)
// 4: Request finished and response is ready (data is fully available or an error occurred)
