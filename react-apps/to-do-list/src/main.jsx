import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { TaskProvider } from "./context.jsx";
createRoot(document.getElementById("root")).render(
  <TaskProvider>
    <App />
  </TaskProvider>
);
