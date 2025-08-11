import React, { useState } from "react";

const Form = () => {
  // onchange
  const [nameText, setNameText] = useState("");
  const [mobileText, setMobileText] = useState("");

  // onsubmit
  const [finalName, setFinalName] = useState("Text Goes Here");
  const [finalMobile, setFinalMobile] = useState("Text Goes Here");

  const nameChangeHandler = (e) => {
    var nameInput = e.target.value;
    setNameText(nameInput);
  };
  const mobileChangeHandler = (e) => {
    var mobileInput = e.target.value;
    setMobileText(mobileInput);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setFinalName(nameText);
    setFinalMobile(mobileText);
  };

  return (
    <div className="form border shadow-sm rounded p-5">
      <h2>{finalName}</h2>
      <p>{finalMobile}</p>

      <hr />

      <form onSubmit={submitHandler} className="d-flex justify-content-between">
        <div>
          <input
            type="text"
            className="form-control"
            placeholder="enter your name"
            onChange={nameChangeHandler}
          />
        </div>
        <div>
          <input
            type="tel"
            className="form-control"
            placeholder="enter your number"
            onChange={mobileChangeHandler}
          />
        </div>

        <button className="btn btn-dark">SUBMIT</button>
      </form>
    </div>
  );
};

// Exporting the Form component as the default export for use in other parts of the app.
export default Form;
