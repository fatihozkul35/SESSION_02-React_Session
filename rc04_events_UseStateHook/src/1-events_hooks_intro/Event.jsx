import React from "react";

const Event = () => {
  let heading = "EVENTS";

  const handleClick = () => {
    alert("Click Btn is Pressed");
  };
  const handleClear = (text) => {
    console.log(text);
  };

  const handleChange = () => {
    heading = "HOOKS";
    console.log(heading);
  };

  return (
    <div className="container text-center mt-4">
      <h1>INFO:{heading}</h1>
      <button className="btn btn-info" onClick={handleClick}>
        Click
      </button>

      {/* if a hanle Events's function has any parameters, We must use arrow function */}
      <button
        className="btn btn-danger"
        onClick={() => handleClear("Clear is Clicked")}
      >
        Clear
      </button>

      <button className="btn btn-warning" onClick={handleChange}>
        Change
      </button>
    </div>
  );
};

//?------------------------------------------------------------------
//? QUESTION: When the change button is clicked, We should change
//? the heading text as HOOKS.
//?-------------------------------------------------------------------
//! We can see the updated heading in the console but, it doesnt render
//! in web page.
//* Beacause, REACT assumes that any element is static as default.
//* It does so in order to minimize DOM manipulation.
//* We should inform React about which element are interactive.
//! We use two methods to inform REACT about interactive elements.
//* 1. Statefull Classes. State-based inform (Class Components)
//* 2. Hooks (Functional Components)
//?--------------------------------------------------------------------

export default Event;
