import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

function Header(props) {
  return (
    <Navbar bg="primary" variant="dark">
      <Container>
        <Navbar.Brand href="/">Home</Navbar.Brand>
        <Nav className="me-auto" className="justify-content-end">
          <Nav.Link href="/signup">Signup</Nav.Link>
          <Nav.Link href="/signin">Signin</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Header;
