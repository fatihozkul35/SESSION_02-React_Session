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
            <NavLink
              className="nav-link"
              style={({ isActive }) => ({
                color: isActive && "red",
              })}
              to="/"
            >
              Home
            </NavLink>
            <NavLink
              to="/instructors"
              className="nav-link"
              style={({ isActive }) => ({
                color: isActive && "red",
              })}
            >
              Instructors
            </NavLink>
            <NavLink
              className="nav-link"
              style={({ isActive }) => ({
                color: isActive && "red",
              })}
              to="/courses"
            >
              Courses
            </NavLink>
            <NavLink
              className="nav-link"
              style={({ isActive }) => ({
                color: isActive && "red",
              })}
              to="/contact"
            >
              Contact
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;
