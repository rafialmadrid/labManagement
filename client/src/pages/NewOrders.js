import React, { useState, useEffect } from "react";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import {
  Input,
  Email,
  Sex,
  TextArea,
  HeaderLabel,
  FormBtn
} from "../components/Form";

function NewOrders() {
  // Setting our component's initial state
  
  // When the form is submitted, use the API.saveBook method to save the book data
  // Then reload books from the database

    return (
      <Container fluid>
        &nbsp;&nbsp;
        <Row>
          <Col size="md">
          <HeaderLabel>Create New Order and Patient</HeaderLabel>
          </Col>
        </Row>
        &nbsp;&nbsp;
        &nbsp;&nbsp;
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
            <label>Date of Birth</label>
            <Input
              name="DOB"
              placeholder="DOB (required)"
              />
            <Sex
              name="Sex"
              />
            &nbsp;&nbsp;
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
        &nbsp;&nbsp;
        <Row>
        <Col size="md">
            <h3>Tests</h3>
            
          <Row>  
          <Col size="md">
          <form>
            <label>ID Test</label>
            <Input
              name="id"
              placeholder="Type test ID number"
              />
            </form>
            </Col>
              <Col size="md">
              <form>
            <label>Test Name</label>
            <Input
              name="Test"
              placeholder="Name of test"
              />
              </form>
              </Col>
              <Col size="md">
              <form>
            <label>Cost</label>
            <Input
              name="Cost"
              placeholder="Cost of test"
              />
              </form>
              </Col>
              <Col size="md">
              <form>
            <label>Days</label>
            <Input
              name="Days"
              placeholder="Number of days"
              />
              </form>
              </Col>
            </Row>
        </Col>
        </Row>
        &nbsp;&nbsp;
        <Row>
        <Col size="md-6">
          <form>
          <h3>Test Costs</h3>
            <label>Costs</label>
            <Input
              name="Costs"
              placeholder="Cost"
              />
            <label>Discount</label>
            <Input
              name="Discount"
              placeholder="Discount (required)"
              />
            <label>Total</label>
            <Input
              name="Total"
              placeholder="Total (required)"
              />
            <label>Remaining Balance</label>
            <Input
              name="Balance"
              placeholder="Balance"
              />  
              </form>
            </Col>
        <Col size="md-6">
            <h3>Patient's Contact Info</h3>
            <form>
            <label>Landline</label>
            <Input
              name="Landline"
              placeholder="Landline (required)"
              />
            <label>Mobile Phone</label>
            <Input
              name="Phone"
              placeholder="Phone (required)"
              />
            <label>Zip Code</label>
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
        &nbsp;&nbsp;
        &nbsp;&nbsp;
    </Container>
    );
}
                
export default NewOrders;

