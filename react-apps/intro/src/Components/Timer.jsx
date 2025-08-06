// Importing the useState tool from the React library.
// useState is a special function (called a hook) that lets us add and manage "state" in our component.
// State is like a memory for your component—it holds data that can change, and when it changes, the component updates to show the new data.
import React, { useState } from "react";

// Creating a component called Timer, which is a small part of our app that shows the current time.
const Timer = () => {
  // Using useState to create a piece of state called 'time'.
  // useState takes one parameter: the initial value of the state, here set to the string "GET TIME".
  // useState returns an array with two items:
  //   1. The current state value (here, named 'time').
  //   2. A function to update the state (here, named 'setTime').
  // We use destructuring to grab these two items: [time, setTime].
  // Destructuring is like unpacking a box with two items into two separate variables.
  const [time, setTime] = useState("GET TIME");

  // Defining a function called getTimeHandler that updates our state.
  // It gets the current time as a string (e.g., "1:02:34 PM") using new Date().toLocaleTimeString().
  // setTime is called to update the 'time' state with this new value.
  // When setTime runs, React re-renders the component to show the updated time.
  const getTimeHandler = () => {
    setTime(new Date().toLocaleTimeString());
  };

  // Setting up a timer that calls getTimeHandler every 1000 milliseconds (1 second).
  // This makes the time update automatically every second, like a digital clock.
  // Note: Using setInterval directly in the component like this isn't ideal (it can cause issues), but it works for this simple example.
  setInterval(getTimeHandler, 1000);

  // Returning what the Timer component shows on the screen.
  return (
    // A div element with a class name "timer" for styling (e.g., with CSS).
    <div className="timer">
      {/*An h2 element that displays the current value of the 'time' state. //
      When the state changes (via setTime), React updates this part to show the
      new time. */}
      <h2>{time}</h2>
    </div>
  );
};

// Exporting the Timer component so it can be used in other parts of the app.
export default Timer;
