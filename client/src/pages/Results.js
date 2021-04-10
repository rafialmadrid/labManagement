import React, { useState, useEffect } from "react";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import ResultsEntry from "./ResultsEntry";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import {
  Input, TextArea, FormBtn
} from "../components/Form";

function Results() {



  // Setting our component's initial state
  const [orders, setOrders] = useState([])
  const [formObject, setFormObject] = useState({})

  // Load all books and store them with setBooks
  useEffect(() => {
    loadOrders()
  }, [])

  // Loads all books and sets them to books
  function loadOrders() {
    API.getOrders()
      .then(res => {
        setOrders(res.data.data);
        console.log(res.data.data);
      }
      )
      .catch(err => console.log(err));
  };
  // Setting our component's initial state
  
  // When the form is submitted, use the API.saveBook method to save the book data
  // Then reload books from the database

  // When the form is submitted, use the API.saveBook method to save the book data
  // Then reload books from the database
  function handleFormSubmit(event) {

    console.log(loadOrders());

  };

                

    return (
      <>
      <Container fluid>

      <Jumbotron>

        <h1>Results</h1>

        </Jumbotron>

        <Row>

          <Col size= "md">

            <Form inline>

              <Input
                name="month"
                placeholder="Month (optional)"
                />
              <Input
                name="from-day"
                placeholder="From (optional)"
                />
              <Input
              name="to-day"
              placeholder="To (optional)"
              />
              <Input
              name="order"
              placeholder="Order (required)"
              />

            <FormBtn
              onClick={handleFormSubmit}
            >
                Search
            </FormBtn>

            </Form>



          </Col>

        </Row>

        <Row>

          <Table striped bordered hover variant="dark" size="sm">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Last Name</th>
                <th>Department</th>
                <th>Status</th>
                <th>Delivery</th>
              </tr>
            </thead>
            <tbody>
                {orders.map(order => (
                  <>
                     <tr key={order._id}>
                        <td>
                          <Link to={"/ResultsEntry/" + order._id}>
                          {order._id}
                          </Link>
                        </td>                      
                        <td></td>                      
                        <td></td>                      
                        <td></td>                      
                        <td></td>                      
                        <td></td>                      
                     </tr>
                     
                     {order.tests.map(test => (
                       <tr>
                        <td>{test.testCatalogueId.name}</td>
                        <td></td>
                        <td></td>
                        <td>{test.testCatalogueId.department}</td>
                        <td></td>
                        <td>{test.delivery}</td>
                       </tr> 
                      ))}


                   </>
                  ))}

            </tbody>
          </Table>

        </Row>

    </Container>

      

      </>
    );
}
                
export default Results;

