import { useState } from "react";
import AddTaskForm from "./AddTaskForm";

const Header = ({ tasks, setTasks }) => {
  const [show, setShow] = useState(false);
  const [btnStyle, setBtnStyle] = useState({
    name: "Show Add Task Bar",
    color: "purple",
  });

  const handleBtnClick = () => {
    setShow(!show);
    if (show) {
      setBtnStyle({ name: "Show Add Task Bar", color: "purple" });
    } else {
      setBtnStyle({ name: "Close Add Task Bar", color: "red" });
    }
  };

  const { name, color } = btnStyle;

  return (
    <header className="header">
      <h1>TASK TRACKER</h1>
      <button
        className="btn"
        style={{ backgroundColor: color }}
        onClick={handleBtnClick}
      >
        {name}
      </button>
      {show && <AddTaskForm tasks={tasks} setTasks={setTasks} />}
    </header>
  );
};

export default Header;
