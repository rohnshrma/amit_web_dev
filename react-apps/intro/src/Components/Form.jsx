import React, { useState } from "react";

const Form = () => {
  // onchange
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
  });

  // onsubmit
  const [finalData, setFinalData] = useState({
    name: "",
    mobile: "",
  });

  const nameChangeHandler = (e) => {
    var nameInput = e.target.value;
    setFormData((prevData) => {
      console.log("prevData => ", prevData);
      return {
        name: nameInput,
        mobile: prevData.mobile,
      };
    });
  };
  const mobileChangeHandler = (e) => {
    var mobileInput = e.target.value;
    setFormData((prevData) => {
      console.log("prevData => ", prevData);
      return {
        name: prevData.name,
        mobile: mobileInput,
      };
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setFinalData(formData);
  };

  return (
    <div className="form border shadow-sm rounded p-5">
      <h2>{finalData.name}</h2>
      <p>{finalData.mobile}</p>

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
