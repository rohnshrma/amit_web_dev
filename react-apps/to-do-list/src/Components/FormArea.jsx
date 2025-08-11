import React, { useState } from "react";

const FormArea = (props) => {
  const [formData, setFormData] = useState({
    title: "",
    status: "pending",
  });

  const changeHandler = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    props.onAdd(formData);
  };

  return (
    <div className="formarea">
      <form
        onSubmit={submitHandler}
        className="d-flex justify-content-evenly align-items-center "
      >
        <div>
          <input
            type="text"
            name="title"
            placeholder="Enter Task Name"
            className="form-control"
            onChange={changeHandler}
          />
        </div>
        <div>
          <select
            name="status"
            onChange={changeHandler}
            className="form-select"
          >
            <option value="Pending">Pending</option>
            <option value="Completed">Completed</option>
          </select>
        </div>
        <button className="btn btn-dark" type="submit">
          ADD +
        </button>
      </form>
    </div>
  );
};

export default FormArea;
