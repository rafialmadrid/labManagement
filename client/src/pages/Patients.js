import React from 'react';
import { Form, FormControl } from 'react-bootstrap';
import { Col, Row, Container } from "../components/Grid";
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import {HeaderLabel} from "../components/Form";


function Patients() {
  return (

    <Container fluid>

        &nbsp;&nbsp;
        <Row>
          <Col size="md">
          <HeaderLabel>Search for a Patient by Name or ID</HeaderLabel>
          </Col>
        </Row>
        &nbsp;&nbsp;
        &nbsp;&nbsp;

    <Row>

    <Col size="md">
    <Form.Label>Name:</Form.Label>
    <InputGroup className="mb-3">
    <FormControl
      placeholder="Enter Name"
      aria-label="Enter Enter Name"
      aria-describedby="basic-addon2"
    />
    </InputGroup>
    </Col>
   

    <Col size="md">
    <Form.Label>ID:</Form.Label>
    <InputGroup className="mb-3">
    <FormControl
      placeholder="Enter ID"
      aria-label="Enter ID"
      aria-describedby="basic-addon2"
    />
    <InputGroup.Append>
      <Button variant="outline-secondary">Search</Button>
    </InputGroup.Append>
    </InputGroup>
    </Col>
    </Row>

    <Row>
    <Table striped bordered hover>
  <thead>
    <tr>
      <th>File</th>
      <th>Name</th>
      <th>Date of Birth</th>
      <th>Phone Number</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>123456789</td>
      <td>John Wayne</td>
      <td>14/05/1991</td>
      <td>55 555 555 09</td>
    </tr>

  </tbody>
</Table>
    </Row>


</Container>



      
    
  );
}

export default Patients;





