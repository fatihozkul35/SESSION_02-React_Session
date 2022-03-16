import { useState } from "react";
import LifeCycleMethods from "./components/LifeCycleMethods";
import Timer from "./components/Timer";
import UseEffectHook from "./components/UseEffectHook";

function App() {
  const [show, setShow] = useState(true);

  return (
    <>
      <div className="container text-center mt-4">
        <button className="btn btn-danger" onClick={() => setShow(!show)}>
          SHOW
        </button>
        {show && <LifeCycleMethods />}
        {show && <Timer time={5} />}
        {show && <UseEffectHook />}
      </div>
    </>
  );
}

export default App;
