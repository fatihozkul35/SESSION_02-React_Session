import { useState } from "react";
import Header from "./components/Header";
import fs from "./assets/fs.png";

const ReactMemoExample = () => {
  const [count, setCount] = useState(0);
  const [img, setImg] = useState();

  const handleBtnClick = () => {
    setCount(count + 1);
  };

  console.log(count);
  return (
    <div>
      <Header img={img} />
      <button onClick={handleBtnClick}>Increase</button>
      <button onClick={() => setImg(fs)}>FS</button>
    </div>
  );
};

export default ReactMemoExample;
