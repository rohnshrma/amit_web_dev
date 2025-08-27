import React, { useReducer } from "react";

const initialState = {
  title: "",
  status: "pending",
};

const taskReducer = (state, action) => {
  console.log("action=>", action);
  console.log("prev state=>", state);

  if (action.type === "titleCHANGE") {
    return {
      title: action.payload,
      status: state.status,
    };
  }

  if (action.type === "statusCHANGE") {
    return {
      title: state.title,
      status: action.payload,
    };
  }
  if (action.type === "RESET") {
    return {
      title: "",
      status: "pending",
    };
  }

  return state;
};

const FormArea = (props) => {
  const [formData, dispatch] = useReducer(taskReducer, initialState);

  const changeHandler = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    dispatch({ type: `${name}CHANGE`, payload: value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    props.onAdd(formData);
    dispatch({ type: "RESET" });
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
