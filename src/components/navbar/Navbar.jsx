import React from 'react'

import { Navbar, Nav, Container } from 'react-bootstrap';


const Header = () => {
  return (
   <>
    <Navbar bg="light" expand="lg" className="my-navbar">
      <Container>
        <Navbar.Brand href="#">My App</Navbar.Brand>
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="#">About</Nav.Link>
            <Nav.Link href="#">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#">Login </Nav.Link>
            <Nav.Link href="#">Sign in </Nav.Link>
          
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
   </>
  )
}

export default Header