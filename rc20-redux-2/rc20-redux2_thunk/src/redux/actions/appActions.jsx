import { SET_LOADING_TRUE, SET_LOADING_FALSE } from "../types/appTypes";

export const setLoadingTrueAction = () => {
  return { type: SET_LOADING_TRUE };
};

export const setLoadingFalseAction = () => {
  return { type: SET_LOADING_FALSE };
};
