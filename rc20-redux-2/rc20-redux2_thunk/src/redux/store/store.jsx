import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "../reducers";

let store;
// //? Development Phase Info ('Developemnt, production etc) can be get
// //? by process.env.NODE_ENV
// //!createStore method can take 2 arguments. Second argument called as enhancer.
// //! Enhancers are extra tools like reduxdev tool or a middleware
// //! if we have more than one enhancer we must combine them via compose method.

if (process.env.NODE_ENV === "development") {
  store = createStore(
    rootReducer,
    compose(
      applyMiddleware(thunk),
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()
    )
  );
} else {
  store = createStore(rootReducer, applyMiddleware(thunk));
}

export default store;
