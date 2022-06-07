import {
  ADD_TODO,
  TOGGLE_TODO,
  DELETE_TODO,
  CLEAR_TODO_LIST,
} from "../types/todoTypes";

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
    case TOGGLE_TODO:
      return {
        ...state,
        list: state.list.map((todo) =>
          todo.id === action.payload
            ? { ...todo, completed: !todo.completed }
            : todo
        ),
      };

    case DELETE_TODO:
      return {
        ...state,
        list: state.list.filter((item) => item.id !== action.payload),
      };

    case CLEAR_TODO_LIST:
      return initialState;

    default:
      return state;
  }
};
export default todoReducer;
