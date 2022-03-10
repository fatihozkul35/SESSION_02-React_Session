import React from "react";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
  Container,
} from "react-bootstrap";
import logo from "../img/logo.png";

function MyNav() {
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">
          <img src={logo} alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ms-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="#">People</Nav.Link>
            <NavDropdown title="Courses" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#">Full-Stack</NavDropdown.Item>
              <NavDropdown.Item href="#">Data Science</NavDropdown.Item>
              <NavDropdown.Item href="#">Devops</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form className="d-flex ms-4">
            <FormControl
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-danger">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNav;
