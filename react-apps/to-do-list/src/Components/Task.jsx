import React from "react";
import { FaTrashAlt } from "react-icons/fa";

const Task = ({ data, id, onDelete }) => {
  return (
    <div className="task d-flex justify-content-between align-items-center bg-light m-2 p-3 rounded shadow ">
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
          onDelete(id);
        }}
      >
        <FaTrashAlt />
      </button>
    </div>
  );
};

export default Task;
