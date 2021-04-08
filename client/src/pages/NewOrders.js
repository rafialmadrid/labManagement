import React, { useState, useEffect } from "react";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import {
  Input, Email, Sex, TextArea, FormBtn
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
            <label>First Name</label>
            <Input
              name="FirstName"
              placeholder="Name (required)"
              />
            <label>Last Name</label>
            <Input
              name="LastName"
              placeholder="Name (required)"
              />
            <label>Sex</label>
            <Sex
              name="Sex"
              />
            <Email
              name="Email"
              placeholder="Email (required)"
              />
            <label>Address</label>
            <TextArea
              name="Address"
              placeholder="Address (Required)"
              />
          </form>
        </Col>
            </Row>
        <Row>
        <Col size="md-6">
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
        <Col size="md-6">
            <h3>Patient's Contact Info</h3>
            <form>
            <Input
              name="Landline"
              placeholder="Landline (required)"
              />
            <Input
              name="Phone"
              placeholder="Phone (required)"
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
        <FormBtn>
              Submit Order
           </FormBtn>
          </Col>
        <Col size="sm-4 sm-4">
        <FormBtn>
              Modify Order
        </FormBtn>
        </Col>
      </Row>
    </Container>
    );
}
                
export default NewOrders;

