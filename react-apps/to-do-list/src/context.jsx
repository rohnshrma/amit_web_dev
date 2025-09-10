import { useState } from "react";

import { createContext } from "react";

const TasksContext = createContext();

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  const [theme, setTheme] = useState("light");

  const themeToggler = () => {
    console.log("Theme Toggling");
    setTheme(theme === "light" ? "dark" : "light");
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
    <TasksContext.Provider
      value={{ theme, tasks, addTaskHandler, deleteTaskHandler, themeToggler }}
    >
      {children}
    </TasksContext.Provider>
  );
};

export default TasksContext;
