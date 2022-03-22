import { useEffect, useState } from "react";
import { Container, Button } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";
import NotFound from "./NotFound";

const InstructorDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => {
        if (!res.ok) {
          setError(true);
          throw new Error("Error");
        }
        return res.json();
      })
      .then((data) => setUser(data))
      .catch((err) => console.log(err));
  }, [id]);

  if (error) {
    return <NotFound />;
  } else if (!user) {
    return (
      <div className="text-center">
        <h1>user data is fetching</h1>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Ajux_loader.gif/600px-Ajux_loader.gif"
          alt=""
        />
      </div>
    );
  }

  return (
    <Container className="text-center mt-4">
      <h3>{user.name}</h3>
      <img
        className="w-75"
        src={`https://avatars.dicebear.com/v2/avataaars/${id}.svg`}
        alt=""
      />
      <h4>{user.email}</h4>
      <h4>{user.phone}</h4>

      <div>
        <Button variant="warning" onClick={() => navigate(-1)}>
          Go Back
        </Button>
        <Button variant="success" onClick={() => navigate("/")}>
          Go Home
        </Button>
      </div>
    </Container>
  );
};

export default InstructorDetails;

//! state sharing with navigate and get state with useLocation

// import { Container, Button } from "react-bootstrap";
// import { useNavigate, useLocation } from "react-router-dom";

// const InstructorDetails = () => {
//   const navigate = useNavigate();
//   const { state } = useLocation();

//   return (
//     <Container className="text-center mt-4">
//       <h3>{state.name}</h3>
//       <img
//         className="w-75"
//         src={`https://avatars.dicebear.com/v2/avataaars/${state.id}.svg`}
//         alt=""
//       />
//       <h4>{state.email}</h4>
//       <h4>{state.phone}</h4>

//       <div>
//         <Button variant="warning" onClick={() => navigate(-1)}>
//           Go Back
//         </Button>
//         <Button variant="success" onClick={() => navigate("/")}>
//           Go Home
//         </Button>
//       </div>
//     </Container>
//   );
// };

// export default InstructorDetails;
