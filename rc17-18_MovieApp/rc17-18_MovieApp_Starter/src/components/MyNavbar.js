import { Link, useNavigate } from "react-router-dom";
import { Container, Nav, Navbar, Button } from "react-bootstrap";

const MyNavbar = () => {
  const navigate = useNavigate();
  const currentUser = true;
  return (
    <Navbar className="navbar" variant="dark" expand="sm">
      <Container fluid>
        <Link to={"/"} className="navbar-brand">
          <h4>React Movie App</h4>
        </Link>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="ms-auto my-2" navbarScroll>
            <div className="buttons align-items-center">
              {currentUser ? (
                <h5 className="mb-0 text-light text-capitalize">
                  {currentUser.displayName}
                </h5>
              ) : (
                <Button
                  variant="outline-light"
                  className="ms-2"
                  onClick={() => navigate("/login")}
                >
                  Login
                </Button>
              )}
              {currentUser ? (
                <Button
                  variant="outline-light"
                  className="ms-2"
                  onClick={() => {
                    navigate("/");
                  }}
                >
                  Logout
                </Button>
              ) : (
                <Button
                  variant="outline-light"
                  className="ms-2"
                  onClick={() => navigate("/register")}
                >
                  Register
                </Button>
              )}
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
