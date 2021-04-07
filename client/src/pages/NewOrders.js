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
      <Row>
        <Col size="md">
          <Jumbotron>
            <h1>What Books Should I Read?</h1>
          </Jumbotron>
          <form>
            <Input
              name="title"
              placeholder="Title (required)"
            />
            <Input
              name="author"
              placeholder="Author (required)"
            />
            <TextArea
              name="synopsis"
              placeholder="Synopsis (Optional)"
            />
            <FormBtn
            >
              Submit Book
            </FormBtn>
          </form>
        </Col>
        <Col size="md-6 sm-12">
            <List>
            </List>
            <h3>No Results to Display</h3>
        </Col>
      </Row>
    </Container>
    );
}
                
export default NewOrders;

