import "./App.css";
import Counter from "./components/counter/Counter";
import Todo from "./components/todo/Todo";
// import { createStore } from "redux";
// import reducer from "./redux";
import { combinedStore } from "./redux";
import { Provider } from "react-redux";

function App() {
  // const store = createStore(reducer);
  const store = combinedStore();
  return (
    <Provider store={store}>
      <div className="app">
        <h1>Redux Class</h1>
        <Counter />
        <Todo />
      </div>
    </Provider>
  );
}

export default App;
