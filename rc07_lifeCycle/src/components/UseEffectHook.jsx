//?==================================================================
//?                       USEEFFECT HOOK
//?==================================================================
//! The Effect Hook lets you perform side effects in function components.
//! We can think of useEffect Hook as componentDidMount,
//! componentDidUpdate, and componentWillUnmount combined.

//! useEffect(() => {
//*   /* ComponentDidMount code */
//! }, []);

//! useEffect(() => {
//*   */ componentDidUpdate code */
//! }, [var1, var2]);

//! useEffect(() => {
//!   return () => {
//*     //* componentWillUnmount code */
//!   };
//! }, []);

//! useEffect(() => {
//*   //* componentDidMount code + componentDidUpdate code */

//!   return () => {
//*     //* componentWillUnmount code */
//!   };
//! }, [var1, var2]);
import { useState, useEffect } from "react";

const UseEffectHook = () => {
  const [count, setCount] = useState(0);

  //!componentDidMount
  //   useEffect(() => {
  //     console.log("Counter mounted");
  //     const timeOut = setTimeout(() => {
  //       alert("Data Fetched");
  //     }, 3000);
  //   }, []);

  //!componentDidMount + componentDidUpdate
  //   useEffect(() => {
  //     console.log(`Count:${count}`);
  //   }, [count]);

  //!componentDidMount + componentWillUnmount
  //   useEffect(() => {
  //     const intervalId = setInterval(() => {
  //       console.log("interval");
  //     }, 1000);

  //     return () => {
  //       //!ComponentWillUnmount
  //       console.log("interval canceled");
  //       clearInterval(intervalId);
  //     };
  //   }, []);

  //!componentDidMount + componentDidUpdate + componentWillUnmount
  useEffect(() => {
    console.log(`Counter Updated: ${count}`);
    const interval = setInterval(() => {
      console.log("interval");
    }, 1000);
    return () => {
      clearInterval(interval);
      console.log("interval Unmounted");
    };
  }, [count]);

  console.log("Render");
  return (
    <div>
      <h1 className="text-danger">USE EFFECT</h1>
      <h3>COUNT:{count}</h3>
      <button className="btn btn-warning" onClick={() => setCount(count + 1)}>
        INC
      </button>
    </div>
  );
};

export default UseEffectHook;
