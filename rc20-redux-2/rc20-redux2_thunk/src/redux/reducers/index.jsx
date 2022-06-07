import { combineReducers } from "redux";
import appReducer from "./appReducer";
import newsReducer from "./newsReducer";
import userReducer from "./userReducer";

const rootReducer = combineReducers({
  app: appReducer,
  user: userReducer,
  news: newsReducer,
});

export default rootReducer;
