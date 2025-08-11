import { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
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

  return (
    <div className="app">
      <FormArea onAdd={addTaskHandler} />
    </div>
  );
}

export default App;
