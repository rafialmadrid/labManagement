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
      <Nav.Link href="patients">Patients</Nav.Link>
      <NavDropdown title="Orders" id="basic-nav-dropdown">

<<<<<<< HEAD
          <NavDropdown.Item href="NewPatient">New Order w/Patients</NavDropdown.Item>
          <NavDropdown.Item href="ExistingOrders">Existing Orders</NavDropdown.Item></NavDropdown>
=======
          <NavDropdown.Item href="NewOrders">New Order w/Patients</NavDropdown.Item>
          <NavDropdown.Item href="ExistingOrders">Existing Orders</NavDropdown.Item>

        </NavDropdown>
>>>>>>> a12e3c3ecf4bebd04aa0645d989c3474aa5697c4
        
        <Nav.Link href="Results">Results</Nav.Link>
        <Nav.Link href="Tests">Tests</Nav.Link>       
      </Nav>
    
    </Navbar.Collapse>
  </Navbar>
  );
}

export default Nava;
