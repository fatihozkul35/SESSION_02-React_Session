import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from "../img/logo.png";
import { Link, NavLink } from "react-router-dom";

function MyNavbar() {
  return (
    <Navbar bg="light" expand="sm">
      <Container fluid>
        <Link to="/">
          <img src={logo} alt="" />
        </Link>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ms-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Link className="nav-link" to="/">
              Home
            </Link>
            <NavLink className="nav-link" to="/instructors">
              Instructors
            </NavLink>
            <NavLink className="nav-link" to="/courses">
              Courses
            </NavLink>
            <NavLink className="nav-link" to="/contact">
              Contact
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;
