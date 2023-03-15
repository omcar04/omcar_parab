import React from "react";
import { Nav, Container, Navbar } from "react-bootstrap";
import logo from "../images/op1.png";
import "./Typedtext.css";

const Navigation = ({
  executeScroll,
  executeAboutScroll,
  executeHomeScroll,
  executeContactScroll,
  expanded,
  setExpanded,
}) => {
  return (
    <>
      <Navbar
        expanded={expanded}
        bg="light"
        expand="lg"
        className="py-3"
        fixed="top"
      >
        <Container>
          <Navbar.Brand onClick={executeHomeScroll}>
            <img
              src={logo}
              width="30"
              height="30"
              alt=""
              style={{ marginBottom: "5px" }}
            />{" "}
            <b>Omkar Parab</b>/ Web Dev
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            onClick={() => setExpanded(expanded ? false : "expanded")}
          />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link onClick={executeAboutScroll}>About</Nav.Link>
              <Nav.Link onClick={executeScroll}>Projects</Nav.Link>
              <Nav.Link onClick={executeContactScroll}>Say Hello</Nav.Link>
              <Nav.Link
                href="https://drive.google.com/file/d/1xTV8hiVIxYxyIwsWYcb00XvbGY3xEWGb/view?usp=sharing"
                target="_blank"
              >
                Resume
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Navigation;
