import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import logo from "../imgs/images.jpg";
import "./Header.css";

const Header = () => {
  return (
    <div className="heder container">
      <Navbar bg="light" expand="md">
        <Container className="Container">
          <Navbar.Brand className="navLink">
            <NavLink to="/">
              <img className="home" src={logo} alt="logo" height="80" />
              <FontAwesomeIcon  icon={faHome}> </FontAwesomeIcon>
            </NavLink>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto navLink formt">
              <NavLink to="/quizhub" className="ms-3 formt">
                QuizHub{" "}
              </NavLink>{" "}
              <NavLink to="/statistic" className="ms-3 formt">
                Statistic{" "}
              </NavLink>{" "}
              <NavLink to="/blog" className="ms-3 formt">
                Blog{" "}
              </NavLink>{" "}
            </Nav>{" "}
          </Navbar.Collapse>{" "}
        </Container>{" "}
      </Navbar>{" "}
    </div>
  );
};

export default Header;
