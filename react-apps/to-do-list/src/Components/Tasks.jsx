import Task from "./Task";

import TasksContext from "../context";
import { useContext } from "react";

const Tasks = ({ tasks, onDelete }) => {
  const { theme } = useContext(TasksContext);

  const properties = {
    backgroundColor: theme === "light" ? "#fff" : "#333",
    color: theme === "light" ? "#333" : "#fff",
  };

  return (
    <div className="tasksList rounded shadow-lg" style={properties}>
      {tasks.length <= 0 ? (
        <h2 className="text-center">No Tasks Found</h2>
      ) : (
        tasks
          .reverse()
          .map((taskObj, index) => (
            <Task
              theme={theme}
              data={taskObj}
              key={index}
              id={index}
              onDelete={onDelete}
            />
          ))
      )}
    </div>
  );
};

export default Tasks;
