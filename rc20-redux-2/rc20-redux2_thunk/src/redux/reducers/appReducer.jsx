import { SET_LOADING_FALSE, SET_LOADING_TRUE } from "../types/appTypes";

const initialState = {
  loading: false,
};

const appReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_LOADING_TRUE:
      return { ...state, loading: true };
    case SET_LOADING_FALSE:
      return { ...state, loading: false };
    default:
      return state;
  }
};
export default appReducer;
