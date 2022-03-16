import { useState, useEffect } from "react";
import axios from "axios";
import faker from "faker";

const UsersAxios = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setUsers(res.data))
      .catch((err) => console.log(err));
  }, []);

  const data = {
    id: faker.datatype.number(),
    name: faker.name.findName(),
  };

  const postUsers = () => {
    axios
      .post("https://jsonplaceholder.typicode.com/posts", { data })
      .then((res) => setUsers([...users, res.data.data]));
  };
  console.log(users);

  return (
    <div className="container text-center mt-4">
      <button className="btn btn-success" onClick={postUsers}>
        POST DATA
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

export default UsersAxios;
