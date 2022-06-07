import React from "react";
import AppRouter from "./router";
import { Provider, useDispatch } from "react-redux";
import axios from "axios";
import store from "./redux/store/store";

// import { createStore, applyMiddleware, compose } from "redux";
// import thunk from "redux-thunk";

// const initialState = {
//   loading: false,
//   token: "",
//   error: [],
//   language: "en",
//   userList: [],
//   selecteduser: {},
//   newsList: [],
//   selectedNews: {},
// };

// export const rootReducer = (state = initialState, { type, payload }) => {
//   switch (type) {
//     case "SET_LOADING_TRUE":
//       return { ...state, loading: true };
//     case "SET_LOADING_FALSE":
//       return { ...state, loading: false };
//     case "SET_TOKEN":
//       return { ...state, payload: payload };
//     case "SET_ERROR":
//       return { ...state, error: payload };
//     case "SET_LANGUAGE":
//       return { ...state, language: payload };
//     case "CLEAR_ERROR":
//       return { ...state, error: [] };
//     case "SET_USER_LIST":
//       return { ...state, userList: payload };
//     case "SET_SELECTED_USER":
//       return { ...state, selectedUser: payload };
//     case "SET_NEWS_LIST":
//       return { ...state, newsList: payload };
//     case "SET_SELECTED_NEWS":
//       return { ...state, selectedNews: payload };
//     default:
//       return state;
//   }
// };

// const store = createStore(rootReducer);
// let store;

// // //? Development Phase Info ('Developemnt, production etc) can be get
// // //? by process.env.NODE_ENV

// // //!createStore method can take 2 arguments. Second argument called as enhancer.
// // //! Enhancers are extra tools like reduxdev tool or a middleware
// // //! if we have more than one enhancer we must combine them via compose method.

// if (process.env.NODE_ENV === "development") {
//   // store = createStore(
//   //   rootReducer,
//   //   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//   // );
//   store = createStore(
//     rootReducer,
//     compose(
//       applyMiddleware(thunk),
//       window.__REDUX_DEVTOOLS_EXTENSION__ &&
//         window.__REDUX_DEVTOOLS_EXTENSION__()
//     )
//   );
// } else {
//   store = createStore(rootReducer, applyMiddleware(thunk));
// }

// store.subscribe(() => console.log(store.getState()));

// store.dispatch({ type: "SET_TOKEN", payload: "DDSGDSGDG21443553" });

//! if we move the buisnesse logic from view side to redux side
//! we should use a middleware like Thunk or Saga
// export const getUserList = async (dispatch) => {
//   try {
//     dispatch({ type: "SET_LOADING_TRUE" });
//     const { data } = await axios.get(
//       "https://jsonplaceholder.typicode.com/users"
//     );

//     dispatch({ type: "SET_USER_LIST", payload: data });
//   } catch (error) {
//     console.log(error);
//   } finally {
//     dispatch({ type: "SET_LOADING_FALSE" });
//   }
// };

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <AppRouter />
      </div>
    </Provider>
  );
};

export default App;
