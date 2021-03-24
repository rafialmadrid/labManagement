import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Nava() {
  return (
    <Navbar bg="light" expand="lg" className="bg-1">
    <Navbar.Brand href="Home">Lab Management</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
      <NavDropdown title="Patients" id="basic-nav-dropdown">
          <NavDropdown.Item href="NewPatient">New</NavDropdown.Item>
          <NavDropdown.Item href="Patients">Existing</NavDropdown.Item>
        </NavDropdown>
        <Nav.Link href="#Orders">Orders</Nav.Link>
        <Nav.Link href="#Results">Results</Nav.Link>     
      </Nav>
    
    </Navbar.Collapse>
  </Navbar>
  );
}

export default Nava;
