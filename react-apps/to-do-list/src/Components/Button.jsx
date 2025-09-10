import TasksContext from "../context";
import { useContext } from "react";

const Button = ({ text, onClick, style }) => {
  console.log(text, onClick, style);

  const { themeToggler } = useContext(TasksContext);

  return (
    <button className="btn" style={style} onClick={themeToggler}>
      {text}
    </button>
  );
};

export default Button;
