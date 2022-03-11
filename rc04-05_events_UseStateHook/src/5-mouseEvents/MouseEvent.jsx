import { useState } from "react";
import { FaReact, FaEvernote } from "react-icons/fa";

const MouseEvent = () => {
  const [coordX, setCoordX] = useState();
  const [coordY, setCoordY] = useState();

  // click event
  const handleClick = (e) => {
    console.log("event", e);
    console.log("event type:", e.type);
    console.log("target:", e.target);
    console.log("current target:", e.currentTarget);
  };

  // doubleClick event
  const handleDoubleClick = (e) => {
    console.log(e);
    console.log("event", e.target.id);
    console.log("text", e.target.innerText);
  };

  // mouseMove event
  const handleMouseMove = (e) => {
    // setCoordX(e.nativeEvent.offsetX);
    // setCoordY(e.nativeEvent.offsetY);
    setCoordX(e.pageX);
    setCoordY(e.pageY);
  };

  return (
    <div className="container text-center d-flex flex-column align-items-center mt-4">
      <h2 className="text-danger">MOUSE EVENTS</h2>
      <p>X and Y</p>
      <p className="text-danger fw-bold">
        {coordX} {coordY}
      </p>
      <div
        id="todo-1"
        className="bg-success text-light w-50 p-4"
        onClick={handleClick}
      >
        todo item 1 <FaReact />
      </div>

      <div
        id="todo-2"
        className="bg-success text-light w-50 p-4 mt-4"
        onDoubleClick={handleDoubleClick}
      >
        todo item 2 <FaEvernote />
      </div>

      <div
        id="todo-3"
        className="bg-success text-light w-50 p-4 my-4"
        onMouseMove={handleMouseMove}
      >
        todo item 3 <FaReact />
      </div>
    </div>
  );
};

export default MouseEvent;
