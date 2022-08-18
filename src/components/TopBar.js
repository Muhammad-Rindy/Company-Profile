import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

export default function TopBar() {
  return (
    <div>
      <Navbar
        bg="dark"
        variant="dark"
        expand="lg"
        fixed="top"
        className="ukuranHp"
      >
        <Container>
          <Navbar.Brand href="#home">Batam Software Digital</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="#about">About Me</Nav.Link>
              <Nav.Link href="#artikel">Blog</Nav.Link>
              <NavDropdown title="Galery" id="basic-nav-dropdown">
                <NavDropdown.Item href="/pictures">Pictures</NavDropdown.Item>
                <NavDropdown.Item href="/videos">Videos</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="/prices">Prices</Nav.Link>
              <NavDropdown title="Supports" id="basic-nav-dropdown">
                <NavDropdown.Item href="/faq">FAQ</NavDropdown.Item>
                <NavDropdown.Item href="/services">
                  Our Services
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="/contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
