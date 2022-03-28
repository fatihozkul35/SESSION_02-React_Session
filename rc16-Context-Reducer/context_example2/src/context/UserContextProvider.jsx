import { createContext, useState, useEffect, useContext } from "react";

//! 1-Creating context
export const UserContext = createContext();

//! 2- Defining Consume Function (Custom Hook)
export const useUserContext = () => {
  return useContext(UserContext);
}

//! 3-Defining Provider Components
const UserContextProvider = ({ children }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  const changeWidth = (id, width) => {
    setUsers(
      users.map((user) => (user.id === id ? { ...user, width: width } : user))
    );
  };

  const values = { users, changeWidth };

  return <UserContext.Provider value={values}>{children}</UserContext.Provider>;
};

export default UserContextProvider;
