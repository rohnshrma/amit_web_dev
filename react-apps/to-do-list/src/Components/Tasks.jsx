import Task from "./Task";

import TasksContext from "../context";
import { useContext } from "react";

const Tasks = () => {
  const { theme, tasks } = useContext(TasksContext);

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
            <Task theme={theme} data={taskObj} key={index} id={index} />
          ))
      )}
    </div>
  );
};

export default Tasks;
