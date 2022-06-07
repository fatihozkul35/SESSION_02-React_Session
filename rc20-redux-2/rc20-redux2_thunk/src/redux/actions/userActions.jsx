import { SET_USER_LIST, SET_SELECTED_USER } from "../types/userTypes";

export const setUserListAction = (payload) => {
  return { type: SET_USER_LIST, payload: payload };
};

export const setSelectedUserAction = (payload) => {
  return { type: SET_SELECTED_USER, payload: payload };
};
