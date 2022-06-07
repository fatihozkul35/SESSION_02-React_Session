import { SET_NEWS_LIST, SET_SELECTED_NEWS } from "../types/newsTypes";

export const setNewsListAction = (payload) => {
  return { type: SET_NEWS_LIST, payload: payload };
};

export const setSelectedNewsAction = (payload) => {
  return { type: SET_SELECTED_NEWS, payload: payload };
};
