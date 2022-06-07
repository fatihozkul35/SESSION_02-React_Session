import axios from "axios";
import {
  setLoadingTrueAction,
  setLoadingFalseAction,
} from "../actions/appActions";
import { setUserListAction } from "../actions/userActions";

//! if we move the buisnesse logic from view side to redux side
//! we should use a middleware like Thunk or Saga
export const getUserList = async (dispatch) => {
  try {
    dispatch(setLoadingTrueAction());
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );

    dispatch(setUserListAction(data));
  } catch (error) {
    console.log(error);
  } finally {
    dispatch(setLoadingFalseAction());
  }
};

//! if getUserList method have paramaters, we should define it as as function which returns another function.
//! and then we can call it as getUserList(paramaters)

// export const getUserList = () => {
//   return async (dispatch) => {
//     try {
//       dispatch(setLoadingTrueAction());
//       const { data } = await axios.get(
//         "https://jsonplaceholder.typicode.com/users"
//       );

//       dispatch(setUserListAction(data));
//     } catch (error) {
//       console.log(error);
//     } finally {
//       dispatch(setLoadingFalseAction());
//     }
//   };
// };
