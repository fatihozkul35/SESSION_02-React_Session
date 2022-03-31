import { ADD_TODO } from "../types/todoTypes";

const initialState = {
  counter: 1,
  list: [
    {
      id: 1,
      text: "Work hard",
      completed: false,
    },
  ],
};

const todoReducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case ADD_TODO:
      return {
        counter: state.counter + 1,
        list: [
          ...state.list,
          { id: state.counter + 1, text: action.payload, completed: false },
        ],
      };

    default:
      return state;
  }
};
export default todoReducer;
