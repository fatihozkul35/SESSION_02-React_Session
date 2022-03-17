import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Instructors = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <Container className="text-center mt-4">
      <h1>INSTRUCTOR LIST</h1>
      <Row>
        {users.map((user) => {
          const { id, name } = user;
          return (
            <Col xs={6} md={4} lg={2} key={id}>
              <img
                src={`https://avatars.dicebear.com/v2/avataaars/${id}.svg`}
                alt=""
                onClick={() => navigate(`/instructors/${id}`)}
              />
              <h6>{name}</h6>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default Instructors;
