import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";


        /*<Nav>
        <Link to={"/Patients"}>Patients</Link>
        </Nav>*/


        /*<Nav>
        <Link to={"/Tests"}>Tests</Link>
        </Nav>       */

function Nava() {
  return (
    <Navbar bg="light" expand="lg" className="bg-1">
    <Navbar.Brand href="Home">Lab Management</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">


      
      <NavDropdown title="Orders" id="basic-nav-dropdown">

        <NavDropdown.Item>
        <Link to={"/NewOrders"}>New Order w/Patients</Link>
        </NavDropdown.Item>

        <NavDropdown.Item>
        <Link to={"/ExistingOrders"}>Existing Orders</Link>  
        </NavDropdown.Item>

      </NavDropdown>

        
        <Nav>
        <Link to={"/Results"}>Results</Link>
        </Nav>

        


      </Nav>
    
    </Navbar.Collapse>
  </Navbar>
  );
}

export default Nava;
