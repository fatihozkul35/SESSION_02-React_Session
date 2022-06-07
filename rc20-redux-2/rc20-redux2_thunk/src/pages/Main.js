import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { getUserList } from "../redux/thunks/userThunk";

// import { getUserList } from "../App";
// import axios from "axios";
// const fakeUserList = [
//   { name: "Ed", username: "mred", email: "mred@mail.com" },
//   { name: "Felix", username: "mrfelix", email: "mrfelix@mail.com" },
//   { name: "John", username: "mrjohn", email: "mrjohn@mail.com" },
//   { name: "Tom", username: "mrtom", email: "mrtom@mail.com" },
//   { name: "Jos", username: "mrjos", email: "mrjos@mail.com" },
// ];

const Main = () => {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.app);
  const { userList } = useSelector((state) => state.user);

  // const loading = useSelector((state) => state.loading);
  // const userList = useSelector((state) => state.userList);

  // const getUserList = async () => {
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

  useEffect(() => {
    dispatch(getUserList);
  }, []);

  return (
    <TableContainer component={Paper}>
      {!loading ? (
        <Table sx={{ minWidth: 650 }}>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Username</TableCell>
              <TableCell>Email</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {userList.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.username}</TableCell>
                <TableCell>{row.email}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      ) : (
        "loading"
      )}
    </TableContainer>
  );
};

export default Main;
