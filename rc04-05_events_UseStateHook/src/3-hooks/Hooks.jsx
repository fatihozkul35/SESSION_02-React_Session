import React, { useState } from "react";
//* ======================= HOOKS ====================================
//! Hooks are the special functions that allow us to use states with
//! functional components instead of Class-based components

//* They are included to the React in 16.8 version.
//? There are various built-in Hooks like useState(), useEffect(),
//? useContext() etc.
//? Morever, we can also create our custom hooks.

//* Hook Usage Rules:
//* 1. First, we must import.
//* 2. Only call Hooks at the top level. Don’t call Hooks inside loops,
//*    conditions, or nested functions.
//* 3. Only call Hooks from React function components. Don’t call Hooks
//*    from regular JavaScript functions.
//*    (There is just one other valid place to call Hooks
//* =====================================================================

const Hooks = () => {
  //* useState is most widely used hook.
  //* it allows us to use the state with a variable,array or object.
  //? it returns two parameters.
  //?  1. state variable
  //?  2. a setter method that changes the state.
  const [count, setCount] = useState(0);
  const [info, setInfo] = useState({
    name: "john",
    email: "john@gmail",
    age: 30,
  });
  // const [toggle, setToggle] = useState(false);

  const handleInc = () => {
    setCount(count + 1);
  };
  const handleDec = () => {
    setCount(count - 1);
  };

  const handleClear = () => {
    setCount(0);
  };

  // const handleUpdate = () => {
  //   setToggle(!toggle);
  //   toggle
  //     ? setInfo({
  //         name: "cem",
  //         email: "cem@gmail",
  //         age: 45,
  //       })
  //     : setInfo({
  //         name: "john",
  //         email: "john@gmail",
  //         age: 30,
  //       });
  // };
  const handleUpdate = () => {
    setInfo({ ...info, age: info.age + 1 });
  };

  return (
    <div className="container text-center mt-4">
      <h1 className="text-danger">USE STATE</h1>
      <h2>COUNT:{count}</h2>
      <button className="btn btn-info" onClick={handleInc}>
        INC
      </button>
      <button className="btn btn-secondary" onClick={handleDec}>
        DEC
      </button>
      <button className="btn btn-dark" onClick={handleClear}>
        CLEAR
      </button>

      <div className="text-center mt-4">
        <h2 className="text-danger">USESTATE WITH OBJECT</h2>
        <h2>{info.name}</h2>
        <h5>{info.email}</h5>
        <h5>{info.age}</h5>
        <button className="btn btn-primary" onClick={handleUpdate}>
          Update
        </button>
      </div>
    </div>
  );
};

export default Hooks;
