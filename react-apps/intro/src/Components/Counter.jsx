// Importing the useState tool from the React library.
// useState lets us create and manage state, which is data that can change and trigger updates in our component.
import React, { useState } from "react";

// Creating a component called Counter, which shows a number and lets users change it with buttons.
const Counter = () => {
  // Logging a message to the console every time the component renders (for debugging).
  // This helps us see when React updates the component due to state changes.
  console.log("Counter rendering");

  // Using useState to create a piece of state called 'count'.
  // useState takes one parameter: the initial value of the state, here set to 0 (a number).
  // useState returns an array with two items:
  //   1. The current state value (here, named 'count').
  //   2. A function to update the state (here, named 'setCount').
  // We use destructuring to assign these two items to 'count' and 'setCount'.
  // Note: Using 'var' here is unusual (React developers typically use 'const' for state variables), but it works the same way.
  var [count, setCount] = useState(0);

  // Defining a function called incrementHandler that increases the 'count' state by 1.
  // setCount updates the state, and React re-renders the component to show the new count.
  // Note: We use the current value of 'count' and add 1 to it.
  const incrementHandler = () => {
    setCount(count + 1);
  };

  // Defining a function called decrementHandler that decreases the 'count' state by 1.
  // setCount updates the state, and React re-renders to show the new count.
  const decrementHandler = () => {
    setCount(count - 1);
  };

  // Defining a function called increaseHandler that increases the 'count' state by 50.
  // setCount updates the state with the new value, and React re-renders.
  const increaseHandler = () => {
    setCount(count + 50);
  };

  // Returning what the Counter component shows on the screen.
  return (
    // A div element with a class name "counter" for styling (e.g., with CSS).
    <div className="counter">
      {/*An h2 element that displays the current value of the 'count' state. //
      When the state changes (via setCount), React updates this part to show the
      new count. */}
      <h2>{count}</h2>
      {/* A button that, when clicked, calls incrementHandler to increase the
      count by 1. */}
      <button onClick={incrementHandler}>Increment</button>
      {/* A button that, when clicked, calls decrementHandler to decrease the
      count by 1. */}
      <button onClick={decrementHandler}>Decrement</button>
      {/* A button that, when clicked, calls increaseHandler to increase the
      count by 50. */}
      <button onClick={increaseHandler}>Increase by 50</button>
    </div>
  );
};

// Exporting the Counter component so it can be used in other parts of the app.
export default Counter;
