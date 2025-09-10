import { useState } from "react";

import { createContext } from "react";

const TasksContext = createContext();

export const TaskProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const themeToggler = () => {
    console.log("Theme Toggling");
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <TasksContext.Provider value={{ theme, themeToggler }}>
      {children}
    </TasksContext.Provider>
  );
};

export default TasksContext;
