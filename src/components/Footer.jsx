import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";

export default function Footer() {
  return (
    <Container>
      <Nav className="justify-content-center">
        <Nav.Link>Link Footer 1</Nav.Link>
        <Nav.Link>Link Footer 2</Nav.Link>
        <Nav.Link>Link Footer 3</Nav.Link>
        <Nav.Link>Link Footer 4</Nav.Link>
      </Nav>
    </Container>
  );
}
