import "./Navigation.scss";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <NavLink className="navbar-brand" to="/" end>
          Navbar
        </NavLink>
        <Nav className="me-auto">
          <NavLink className="nav-link" to="/" end>
            Home
          </NavLink>
          <NavLink className="nav-link" to="/users">
            Users
          </NavLink>
          <NavLink className="nav-link" to="/projects">
            Projects
          </NavLink>
          <NavLink className="nav-link" to="/about">
            About
          </NavLink>
        </Nav>
        <Nav>
          <NavLink className="nav-link" to="/login">
            Login
          </NavLink>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Navigation;
