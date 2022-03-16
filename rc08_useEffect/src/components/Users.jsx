import { useState, useEffect } from "react";

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((err) => console.log(err));
  };

  console.log(users);

  return (
    <div className="container text-center mt-4">
      <button className="btn btn-success" onClick={getUsers}>
        GET DATA
      </button>
      <h1>USER LIST</h1>
      <div className="row">
        {users.map((user) => {
          const { id, name } = user;
          return (
            <div className="col-6 col-md-4 col-lg-2" key={id}>
              <img
                src={`https://avatars.dicebear.com/v2/avataaars/${id}.svg`}
                alt=""
              />
              <h6>{name}</h6>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Users;
