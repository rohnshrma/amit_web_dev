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

  const changeHandler = (e) => {
    var { name, value } = e.target;
    console.log(name, value);
    setFormData((prevData) => {
      console.log("prevData => ", prevData);
      return {
        ...prevData,
        [name]: value,
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
            onChange={changeHandler}
            name="name"
          />
        </div>
        <div>
          <input
            type="tel"
            className="form-control"
            placeholder="enter your number"
            onChange={changeHandler}
            name="mobile"
          />
        </div>

        <button className="btn btn-dark">SUBMIT</button>
      </form>
    </div>
  );
};

// Exporting the Form component as the default export for use in other parts of the app.
export default Form;
