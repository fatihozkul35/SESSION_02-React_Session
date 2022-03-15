import Event from "./1-events_hooks_intro/Event";
import Counter from "./2-classComponents/Counter";

function App() {
  return (
    <div>
      <Event />
      <Counter />
      <Counter count={10} />
    </div>
  );
}

export default App;
