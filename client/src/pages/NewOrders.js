import React, { useState, useEffect } from "react";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Table from 'react-bootstrap/Table';
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { useFormik } from "formik";
import { Input, Email, Sex, TextArea,HeaderLabel, FormBtn } from "../components/Form";


function NewOrders() {
  // Setting our component's initial state

     const formik = useFormik({

         initialValues: {
          
          
          patient: {

             firstName: 'AL',
             lastName: 'R',
             dateOfBirth: '',
             gender: 'F',
             email: 'ASDAS@gmail',
             adress: '121121'

          },

          order: {
            type: "U",
            subtotal: 555.00,
            discount: 0.00,
            iva: 0.16,
            tax: 0,
            total: 20.00,
            charge: 98.00,
            branch: "MATRIZ"
          },

           test: 
            [
                {
                  testCatalogueId: "606f57c88d621893a41eebf9",
                  delivery: "2",
                  type: "N"
                },
                {
                  testCatalogueId: "606f5a6a8d621893a41eebfe",
                  delivery: "2",
                  type: "N"
                }
            ]

        
        
         },

       onSubmit: values => {
         
         
         API.createPatientAndOrder(values) 
         .then(res => {
            console.log(res);     
          })
         .catch(err => console.log(err));
       },

     });


  function getTestCatalogue (code) {

    API.getTestCatalogue(code)

      .then(res => {
      
      })
      .catch(err => console.log(err));
  }

  
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
          <form onSubmit={formik.handleSubmit}>
            <label>First Name</label>
            <input
              id="patient.firstName"
              name="patient.firstName"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.patient.firstName}
              placeholder="Name (required)"
              />
            <label>Last Name</label>
            <input
              id="patient.lastName"
              name="patient.lastName"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.patient.lastName}
              placeholder="Name (required)"
              />
            <label>Date of Birth</label>
            <input
              id="patient.dateOfBirth"
              name="patient.dateOfBirth"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.patient.dob}
              placeholder="DOB (required)"
              />
            <Sex
              id="patient.gender"
              name="patient.gender"
              type="text"
              />  
            &nbsp;&nbsp;
            <input
              id="patient.email"
              name="patient.email"
              type="email"
              onChange={formik.handleChange}
              value={formik.values.email}
              placeholder="Email (required)"
              />
            <label>Address</label>
            <TextArea
              id="patient.adress"
              name="patient.adress"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.address}
              placeholder="Address (Required)"
              />
              <button type="submit">Submit</button>
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
            <label>Test Code</label>
            <Input 
              name="id"
              id="test-code"
              placeholder="Type test code"
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
          <Table hover variant="dark" size="sm">
            <thead>
              <tr>
                <th>Code</th>
                <th>Test</th>
                <th>Price</th>
                <th>Type</th>
                <th>Days</th>
              </tr>
            </thead>
            <tbody>

            {

                <>
                 <tr key={""}>
                    <td>{}</td>                      
                    <td>{}</td>                      
                    <td>{}</td>                      
                    <td>{}</td>                      
                    <td>{}</td>                      
                 </tr>
                 </>

            }

            </tbody>
          </Table>

        </Row>

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

