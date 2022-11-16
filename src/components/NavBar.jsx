import React from "react";
import CartWidget from "./CartWidget";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const NavBar = () => {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Nav className="Nav1 m-0">
            <Nav.Link href="">Link 1</Nav.Link>
            <Nav.Link href="">Link 2</Nav.Link>
            <Nav.Link href="">Link 3</Nav.Link>
          </Nav>

          <div>
            <CartWidget />
          </div>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
