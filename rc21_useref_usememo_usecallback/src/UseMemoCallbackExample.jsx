import { useMemo, useEffect, useState, useCallback, useRef } from "react";
import axios from "axios";
import UserContainer from "./components/UserContainer";

const UseMemoCallbackExample = () => {
  const [users, setUsers] = useState([]);
  const [text, setText] = useState("");
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setUsers(res.data));
  }, []);

  //   console.log(users);

  const handleSearch = () => {
    console.log("Searching");
    setSearch(text);
  };

  const filteredUsers = useMemo(
    () =>
      users.filter((user) =>
        user.name.toLowerCase().includes(search.toLowerCase())
      ),
    [users, search]
  );

  const addUser = useCallback(() => {
    setUsers([
      ...users,
      { id: users.length + 1, name: `Clarusway-${users.length - 9}` },
    ]);
  }, [users]);

  return (
    <div>
      <input
        onChange={(e) => {
          console.log("onchange runing:text updated");
          setText(e.target.value);
        }}
      />
      <button onClick={handleSearch}>Search User</button>
      <UserContainer users={filteredUsers} add={addUser} />
    </div>
  );
};

export default UseMemoCallbackExample;
