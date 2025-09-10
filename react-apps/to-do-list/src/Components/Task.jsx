import React from "react";
import { FaTrashAlt } from "react-icons/fa";

import TasksContext from "../context";
import { useContext } from "react";

const Task = ({ data, id }) => {
  const { theme, deleteTaskHandler } = useContext(TasksContext);

  const properties = {
    backgroundColor: theme === "light" ? "#fff" : "#333",
    color: theme === "light" ? "#333" : "#fff",
  };

  return (
    <div
      style={properties}
      className="task d-flex justify-content-between align-items-center  m-2 p-3 rounded shadow "
    >
      <h2 className="task_title">{data.title}</h2>
      <h2
        className={`task_status badge text-bg-${
          data.status == "pending" ? "danger" : "success"
        }`}
      >
        {data.status == "pending" ? "Pending" : "Compeleted"}
      </h2>
      <button
        className="btn btn-sm btn-danger"
        onClick={() => {
          deleteTaskHandler(id);
        }}
      >
        <FaTrashAlt />
      </button>
    </div>
  );
};

export default Task;
