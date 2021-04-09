import React, { useState } from 'react';
import "./Login.css"
import PropTypes from 'prop-types';
import {
  Container,
  Navbar,
  Row,
  Col,
  Form,
  Button
} from 'react-bootstrap';

async function loginUser(credentials) {
  return fetch('http://localhost:3000/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  })
    .then(data => data.json())
 }
 

export default function Login({ setToken }) {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();
  const handleSubmit = async e => {
    e.preventDefault();
    const token = await loginUser({
      username,
      password
    });
    setToken(token);
  }
  return(
    <>
    <Navbar bg="light" expand="lg" className="bg-1">
      <Navbar.Brand variant="light">labManagement</Navbar.Brand>
    </Navbar>
      <Container fluid>
        <Row> 
      <Col size="md" className="login-wrapper">
            &nbsp;&nbsp;
            &nbsp;&nbsp;     
            <span className="badge badge-pill badge-primary"
              style={{ fontSize:"35px", marginBottom: 10 }}
            >labManagement Log In</span>
      <Form onSubmit={handleSubmit}>
              <Form.Group>
              <Row>
        <Form.Label>
        <b>Username </b>
      </Form.Label>
        <Form.Control type="text" onChange={e => setUserName(e.target.value)} />
        </Row>
              <Row>    
              <Form.Label>
        <b>Password  </b>
      </Form.Label>
        <Form.Control type="password" onChange={e => setPassword(e.target.value)} />
      </Row>
      &nbsp;&nbsp;
      <Row>
                  <Button type="submit">Submit</Button>
      </Row>
            </Form.Group>
        </Form>
      </Col>
      </Row>
      </Container>
    </>
  )
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired
}