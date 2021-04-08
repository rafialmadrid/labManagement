import React, { useState, useEffect } from "react";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import {
  Input, TextArea, FormBtn
} from "../components/Form";

function NewOrders() {
  // Setting our component's initial state
  
  // When the form is submitted, use the API.saveBook method to save the book data
  // Then reload books from the database

    return (
      <Container fluid>
      <Jumbotron>
            <h1>Create New Order and Patient</h1>
          </Jumbotron>
      <Row>
          <Col size="md">
          <h3>Patient's Information</h3>
          <form>
            <Input
              name="Name"
              placeholder="Name (required)"
            />
            <Input
              name="Sex"
              placeholder="Sex (required)"
              />
            <Input
              name="Email"
              placeholder="Email (required)"
            />
            <TextArea
              name="Address"
              placeholder="Address (Optional)"
            />
            
          </form>
        </Col>
        <Col size="md-6 sm-12">
            <h3>Patient's Contact Info</h3>
            <form>
            <Input
              name="Landline"
              placeholder="Landline (required)"
            />
            <Input
              name="Phone"
              placeholder="Phonne (required)"
              />
            <Input
              name="Zip Code"
              placeholder="Zip (required)"
            />
          </form>
        </Col>
        </Row>
        <Row>
        <Col size="sm-4 sm-4">
          <form>
          <h3>Test Costs</h3>
            <Input
              name="Costs"
              placeholder="Cost"
            />
            <Input
              name="Discount"
              placeholder="Discount (required)"
              />
            <Input
              name="Total"
              placeholder="Total (required)"
              />
            <Input
              name="Balance"
              placeholder="Balance"
            />  
          </form>
      </Col>
        </Row>
        <Row>
        <Col size="md-6 sm-12">  
        <FormBtn>
              Submit Order
            </FormBtn>
        </Col>
      </Row>
    </Container>
    );
}
                
export default NewOrders;

