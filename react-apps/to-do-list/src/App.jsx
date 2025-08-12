import { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Task from "./Components/Task";
import "./App.css";
import FormArea from "./Components/FormArea";

function App() {
  const [tasks, setTasks] = useState([]);

  const addTaskHandler = (taskObj) => {
    console.log("New Task", taskObj);
    setTasks((prevTasks) => {
      return [...prevTasks, taskObj];
    });
  };

  const deleteTaskHandler = (id) => {
    setTasks((prevTasks) => {
      return prevTasks.filter((tasks, index) => {
        return index !== id;
      });
    });
  };

  return (
    <div className="app">
      <FormArea onAdd={addTaskHandler} />
      <div className="tasksList rounded shadow-lg">
        {tasks.length <= 0 ? (
          <h2 className="text-center">No Tasks Found</h2>
        ) : (
          tasks
            .reverse()
            .map((taskObj, index) => (
              <Task
                data={taskObj}
                key={index}
                id={index}
                onDelete={deleteTaskHandler}
              />
            ))
        )}
      </div>
    </div>
  );
}

export default App;
