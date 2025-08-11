// Importing React and the useState hook from the 'react' library.
// - React is a JavaScript library for building user interfaces, particularly single-page applications.
// - useState is a "hook" in React that allows functional components (like this one) to manage state (data that can change over time).
import React, { useState } from "react";

// Defining a functional component named 'Form' using an arrow function.
// - A component is a reusable piece of UI (like a form or button) in React.
// - Arrow function syntax: () => {} is a concise way to define a function in JavaScript.
const Form = () => {
  // Declaring a state variable called 'formData' using the useState hook.
  // - State is used to store data that can change, like user input in a form.
  // - useState({ name: "", mobile: "" }) initializes formData as an object with two properties: 'name' and 'mobile', both empty strings.
  // - useState returns an array with two elements:
  //   1. formData: the current state value (initially { name: "", mobile: "" }).
  //   2. setFormData: a function to update the formData state.
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
  });

  // Declaring another state variable called 'finalData' using useState.
  // - This state will store the form data after the form is submitted.
  // - Like formData, it’s initialized as an object with 'name' and 'mobile' properties, both empty strings.
  const [finalData, setFinalData] = useState({
    name: "",
    mobile: "",
  });

  // Defining a function called 'changeHandler' to handle input changes (e.g., when the user types in the form).
  // - 'e' is the event object, automatically passed by JavaScript when an event (like typing) occurs.
  // - This function runs every time the user types in the input fields.
  const changeHandler = (e) => {
    // Extracting 'name' and 'value' from the event target (the input field that triggered the event).
    // - e.target refers to the HTML element (e.g., <input>) that triggered the event.
    // - e.target.name is the 'name' attribute of the input (e.g., "name" or "mobile").
    // - e.target.value is what the user typed in the input field.
    var { name, value } = e.target;

    // Logging the name and value to the console for debugging.
    // - console.log is a JavaScript method to print information to the browser’s developer console.
    // - This helps developers see what’s happening as the user types.
    console.log(name, value);

    // Updating the formData state using setFormData.
    // - setFormData takes a function that receives the previous state (prevData) as an argument.
    // - This is called a "functional update" and is the recommended way to update state based on its previous value.
    setFormData((prevData) => {
      // Logging the previous state for debugging purposes.
      console.log("prevData => ", prevData);

      // Returning a new object to update the state.
      // - The spread operator (...prevData) copies all properties from the previous state (e.g., { name: "", mobile: "" }).
      // - [name]: value dynamically updates the property specified by 'name' (either "name" or "mobile") with the new 'value'.
      // - For example, if name="name" and value="John", this creates { name: "John", mobile: "" }.
      return {
        ...prevData,
        [name]: value,
      };
    });
  };

  // Defining a function called 'submitHandler' to handle form submission.
  // - This runs when the user clicks the "SUBMIT" button.
  // - 'e' is the event object for the form submission.
  const submitHandler = (e) => {
    // Preventing the default form submission behavior.
    // - By default, submitting a form reloads the page, which we don’t want in a React app.
    // - e.preventDefault() stops this default behavior, allowing us to handle the submission with JavaScript.
    e.preventDefault();

    // Updating the finalData state with the current formData.
    // - When the form is submitted, we copy the current formData (user’s input) to finalData.
    // - This allows us to display the submitted data above the form.
    setFinalData(formData);
  };

  // The 'return' statement defines the JSX (React’s syntax for rendering UI) that this component displays.
  // - JSX looks like HTML but is actually JavaScript that React uses to create elements.
  return (
    // A <div> element that wraps the entire form UI.
    // - className="form border shadow-sm rounded p-5" applies CSS classes for styling (e.g., border, shadow, padding).
    // - These classes likely come from a CSS framework like Bootstrap for a styled look.
    <div className="form border shadow-sm rounded p-5">
      {/* // Displaying the submitted name from finalData.
      // - {finalData.name} is JavaScript inside JSX, enclosed in curly braces {}.
      // - This shows the value of finalData.name (updated after form submission). */}
      <h2>{finalData.name}</h2>

      {/* // Displaying the submitted mobile number from finalData.
      // - Similar to above, {finalData.mobile} shows the value of finalData.mobile. */}
      <p>{finalData.mobile}</p>

      {/* // A horizontal rule (<hr>) to visually separate the displayed data from the form. */}
      <hr />

      {/* // The <form> element that contains the input fields and submit button.
      // - onSubmit={submitHandler} means the submitHandler function runs when the form is submitted.
      // - className="d-flex justify-content-between" uses Bootstrap classes to make the form elements display flexibly with space between them. */}
      <form onSubmit={submitHandler} className="d-flex justify-content-between">
        {/* // A <div> wrapping the name input field for layout purposes. */}
        <div>
          {/* // An <input> element for the user to enter their name.
          // - type="text" specifies this is a text input.
          // - className="form-control" applies Bootstrap styling for a clean input look.
          // - placeholder="enter your name" shows a hint in the input when it’s empty.
          // - onChange={changeHandler} means the changeHandler function runs every time the user types in this input.
          // - name="name" identifies this input, so changeHandler knows which field is being updated. */}
          <input
            type="text"
            className="form-control"
            placeholder="enter your name"
            onChange={changeHandler}
            name="name"
          />
        </div>

        {/* // A <div> wrapping the mobile number input field. */}
        <div>
          {/* // An <input> element for the user to enter their mobile number.
          // - type="tel" specifies this is for telephone numbers (though it behaves like text in most browsers).
          // - Other attributes are similar to the name input.
          // - name="mobile" identifies this input for the changeHandler. */}
          <input
            type="tel"
            className="form-control"
            placeholder="enter your number"
            onChange={changeHandler}
            name="mobile"
          />
        </div>

        {/* // A <button> element for submitting the form.
        // - className="btn btn-dark" applies Bootstrap styling for a dark-colored button.
        // - Clicking this button triggers the form’s onSubmit event, running submitHandler. */}
        <button className="btn btn-dark">SUBMIT</button>
      </form>
    </div>
  );
};

// Exporting the Form component as the default export.
// - This allows the Form component to be imported and used in other parts of the React application.
// - For example, another file can do: import Form from './Form';
export default Form;
