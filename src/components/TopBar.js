import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

export default function TopBar() {
  return (
    <div>
      <Navbar
        bg="dark"
        variant="dark"
        expand="lg"
        fixed="top"
        className="responsiveNavbar"
      >
        <Container>
          <Navbar.Brand>Batam Software Digital</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={HashLink} to="/#">
                Home
              </Nav.Link>
              <Nav.Link as={HashLink} to="/#about">
                About Me
              </Nav.Link>
              <Nav.Link as={HashLink} to="/#artikel">
                Blog
              </Nav.Link>
              <NavDropdown
                menuVariant="dark"
                title="Galery"
                id="basic-nav-dropdown"
              >
                <NavDropdown.Item as={Link} to="/pictures">
                  Pictures
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/videos">
                  Videos
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link as={Link} to="/prices">
                Prices
              </Nav.Link>
              <NavDropdown
                menuVariant="dark"
                title="Supports"
                id="basic-nav-dropdown"
              >
                <NavDropdown.Item as={Link} to="/faq">
                  FAQ
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/services">
                  Our Services
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link as={Link} to="/contact">
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
