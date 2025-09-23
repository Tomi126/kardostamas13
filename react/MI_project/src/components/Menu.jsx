import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import { useState } from 'react'




function Menu() {
  const [count, setCount] = useState(0)

  return (
    <>
        <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
      <Container>
        <Navbar.Brand as={Link} to="/">React Minta</Navbar.Brand>
        <Navbar.Toggle aria-controls="menu" />
        <Navbar.Collapse id="menu">
          <Nav className="me-auto">
            <LinkContainer to="/">
              <Nav.Link>Főoldal</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/leiras">
              <Nav.Link>Leírás</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/regisztracio">
              <Nav.Link>Regisztráció</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default Menu
