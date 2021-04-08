import React, { useState, useEffect } from "react";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Table from 'react-bootstrap/Table';
import DeleteBtn from "../components/DeleteBtn";
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
  
  // When the form is submitted, use the API.saveBook method to save the book data
  // Then reload books from the database

    return (
      <Container fluid>

      <Jumbotron>

        <h1>Results</h1>

        </Jumbotron>

        <Row>

          <Col size= "md">
            <form>
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

            </form>

            <FormBtn>
                Search
            </FormBtn>
            

          </Col>

        </Row>

        <Row>

          <Table striped bordered hover size="sm">
            <thead>
              <tr>
                <th>#</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Username</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <td>3</td>
                <td colSpan="2">Larry the Bird</td>
                <td>@twitter</td>
              </tr>
            </tbody>
          </Table>

        </Row>

    </Container>
    );
}
                
export default Results;

