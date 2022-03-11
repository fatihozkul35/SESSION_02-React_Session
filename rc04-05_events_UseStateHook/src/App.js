import Event from "./1-events_hooks_intro/Event";
import Counter from "./2-classComponents/Counter";
import Hooks from "./3-hooks/Hooks";
import Form from "./4-forms/Form";
import FormObject from "./4-forms/FormObject";
import MouseEvent from "./5-mouseEvents/MouseEvent";
import KeyboardEvents from "./6-keyboardEvents/KeyboardEvents";

function App() {
  return (
    <div>
      <Event />
      <Counter />
      <Counter count={10} />
      <Hooks />
      <Form />
      <FormObject />
      <MouseEvent />
      <KeyboardEvents />
    </div>
  );
}

export default App;
