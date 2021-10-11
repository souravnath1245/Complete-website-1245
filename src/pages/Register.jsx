import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className="container">
            <h1> This is Register page.</h1>

            <Form>
  <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
    <Form.Label column sm={2}>
      Name
    </Form.Label>
    <Col sm={10}>
      <Form.Control type="text" placeholder="Enter Your First And Last Name" />
    </Col>
  </Form.Group>
  <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
    <Form.Label column sm={2}>
      Phone 
    </Form.Label>
    <Col sm={10}>
      <Form.Control type="number" placeholder="Enter Your Phone Number" />
    </Col>
  </Form.Group>
  <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
    <Form.Label column sm={2}>
      Email
    </Form.Label>
    <Col sm={10}>
      <Form.Control type="email" placeholder="Email" />
    </Col>
  </Form.Group>

  <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
    <Form.Label column sm={2}>
      Password
    </Form.Label>
    <Col sm={10}>
      <Form.Control type="password" placeholder="Password" />
    </Col>
  </Form.Group>
  
  {/* <Form.Group as={Row} className="mb-3" controlId="formHorizontalCheck">
    <Col sm={{ span: 10, offset: 2 }}>
      <Form.Check to="/login"  label="Already Register" />
    </Col>
  </Form.Group> */}
  <Link to="/login" >Already Register ?</Link>

  <Form.Group as={Row} className="mb-3">
    <Col sm={{ span: 10, offset: 2 }}>
      <Button type="submit" className='btn btn-danger'>Register</Button>
    </Col>
  </Form.Group>
</Form>
        </div>
    );
};

export default Register;