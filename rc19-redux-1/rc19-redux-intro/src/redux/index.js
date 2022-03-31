import { createStore, combineReducers } from "redux";
import counterReducer from "./reducer/counterReducer";
import todoReducer from "./reducer/todoReducer";

const reducers = combineReducers({
  counterReducer: counterReducer,
  todoReducer: todoReducer,
});

export const combinedStore = () => {
  const store = createStore(reducers);
  return store;
};

// const initialState = {
//   counter: 0,
// };

// const reducer = (state = initialState, action) => {
//   switch (action.type) {
//     case "INCREMENT":
//       return { counter: state.counter + 1 };
//     case "DECREMENT":
//       return { counter: state.counter - 1 };
//     case "RESET":
//       return { counter: 0 };
//     default:
//       return state;
//   }
// };
// export default reducer;
//
