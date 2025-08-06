// Importing React and the useState hook from the 'react' library.
// React is required for building UI components, and useState manages state in functional components.
import React, { useState } from "react";

// Defining a functional component named 'Form' using an arrow function.
// This component renders a form with an input field and a submit button.
const Form = () => {
  // Declaring a state variable 'text' with its setter 'setText' using useState.
  // 'text' holds the current input value as the user types, initialized as an empty string.
  const [text, setText] = useState("");

  // Declaring a state variable 'finalText' with its setter 'setFinalText'.
  // 'finalText' stores the submitted text for display, initialized as "Text Goes Here".
  const [finalText, setFinalText] = useState("Text Goes Here");

  // Defining 'changeHandler' to handle input field changes.
  // Triggered on every keystroke in the input field.
  const changeHandler = (e) => {
    // Extracting the current input value from the event object.
    var textInput = e.target.value;
    // Updating the 'text' state with the new input value, making the input controlled.
    setText(textInput);
  };

  // Defining 'submitHandler' to handle form submission.
  // Triggered when the user clicks the submit button.
  const submitHandler = (e) => {
    // Preventing default form submission to avoid page reload, maintaining SPA behavior.
    e.preventDefault();
    // Updating 'finalText' with the current 'text' value to display it above the form.
    setFinalText(text);
  };

  // Returning the JSX that defines the component's UI.
  return (
    <div className="form border shadow-sm rounded p-5">
      {/* Displaying 'finalText' in an h2 tag, initially "Text Goes Here", updated on submission */}
      <h2>{finalText}</h2>
      {/* Horizontal rule for visual separation between displayed text and form */}
      <hr />
      {/* Form element with onSubmit event tied to submitHandler, styled with Bootstrap flex classes */}
      <form onSubmit={submitHandler} className="d-flex justify-content-between">
        {/* Input field, controlled by 'text' state, updates via changeHandler on each keystroke */}
        <input
          type="text"
          className="form-control"
          placeholder="enter your name"
          onChange={changeHandler}
        />
        {/* Submit button, styled with Bootstrap, triggers form submission */}
        <button className="btn btn-dark">SUBMIT</button>
      </form>
    </div>
  );
};

// Exporting the Form component as the default export for use in other parts of the app.
export default Form;
