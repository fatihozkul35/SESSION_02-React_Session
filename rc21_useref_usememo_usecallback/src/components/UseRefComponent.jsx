import { useEffect, useRef, useState } from "react";

const UseRefComponent = () => {
  const inputRef = useRef();
  const [count, setCount] = useState(0);
  const countRef = useRef(0);
  //   console.log(inputRef.current);

  useEffect(() => {
    //  document.querySelector("input").focus();
    inputRef.current.focus();
    inputRef.current.style.backgroundColor = "gray";
    inputRef.current.style.color = "white";
  }, []);

  const handleClick = () => {
      setCount(count + 1);
    countRef.current += 1;
  };

  console.log("RENDER", count);
  console.log(countRef);

  return (
    <div className="useref">
      <h2>USEREF</h2>
      <input ref={inputRef} type="text" placeholder="enter your text" />
      <button onClick={handleClick}>Increase</button>
    </div>
  );
};

export default UseRefComponent;
