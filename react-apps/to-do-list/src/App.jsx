import { useState, useContext } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Tasks from "./Components/Tasks";
import "./App.css";
import FormArea from "./Components/FormArea";
import { FaSun } from "react-icons/fa";
import { FaMoon } from "react-icons/fa";
import Button from "./Components/Button";
import TasksContext from "./context";

function App() {
  const [tasks, setTasks] = useState([]);

  const { theme } = useContext(TasksContext);

  var properties = {
    backgroundColor: theme === "light" ? "#fff" : "#222",
    color: theme === "light" ? "#333" : "#fff",
  };

  var btn_styles = {
    backgroundColor: theme === "light" ? "#333" : "#fff",
    color: theme === "light" ? "#fff" : "#333",
    borderRadius: "10px",
    position: "absolute",
    top: "10px",
    right: "10px",
  };

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
    <div className="app" style={properties}>
      <FormArea onAdd={addTaskHandler} />

      <Tasks tasks={tasks} onDelete={deleteTaskHandler} />

      <Button
        text={theme === "light" ? <FaMoon /> : <FaSun />}
        style={btn_styles}
      ></Button>
    </div>
  );
}

export default App;
