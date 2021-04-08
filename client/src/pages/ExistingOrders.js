import React from 'react';
import { Form, FormControl } from 'react-bootstrap';
import { Col, Row, Container } from "../components/Grid";
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table'


function ExistingOrders() {
  return (

    <Container fluid>

    <Row>
    <Col size="md">
    <Form.Group controlId="dob">
    <Form.Label>From </Form.Label>
    <Form.Control type="date" name="dob" placeholder="Date of Birth" />
    </Form.Group> 
    </Col>

    <Col size="md">
    <Form.Group controlId="dob">
    <Form.Label>To</Form.Label>
    <Form.Control type="date" name="dob" placeholder="Date of Birth" />
    </Form.Group> 
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
      <th>ID</th>
      <th>Name</th>
      <th>Amount</th>
      <th>Discount</th>
      <th>Total</th>
      <th>Balance</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>123456789</td>
      <td>John Wayne</td>
      <td>1000</td>
      <td>100</td>
      <td>900</td>
      <td>0</td>
    </tr>

  </tbody>
</Table>
    </Row>


</Container>



      
    
  );
}

export default ExistingOrders;




