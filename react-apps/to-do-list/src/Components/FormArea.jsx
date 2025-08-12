import React, { useState } from "react";

const FormArea = (props) => {
  const [formData, setFormData] = useState({
    title: "",
    status: "pending",
  });

  const changeHandler = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
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
    setFormData({
      title: "",
      status: "pending",
    });
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
            required
            placeholder="Enter Task Name"
            className="form-control"
            onChange={changeHandler}
            value={formData.title}
          />
        </div>
        <div>
          <select
            name="status"
            onChange={changeHandler}
            className="form-select"
            value={formData.status}
          >
            <option value="pending">Pending</option>
            <option value="completed">Completed</option>
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
