import React, { useState } from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap';

type Props = {}

const NavBar = (props: Props) => {
    
  return (
    <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="about">About</Nav.Link>
            <Nav.Link href="jobs">Jobs</Nav.Link>
            <Nav.Link href="hackathons">Hackathons</Nav.Link>
            <Nav.Link href="scholarships">Scholarships</Nav.Link>


          </Nav>
        </Container>
      </Navbar>

  )
}

export default NavBar;