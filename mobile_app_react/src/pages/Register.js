import React, { Component } from 'react';
import { Navbar, Container, Row, Col, Form, Button } from 'react-bootstrap';
import './Register.css';

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cpf: '',
      name: '',
      birth_date: '',
      email: '',
      password: ''
    }
  }

  whenChangeEmail(event) { 
    let newValue = event.target.value;
    this.setState(previousState => {
      previousState.email = newValue;
      return previousState;
    });
  }

  render () {
    return (
      <div>
        <Navbar bg="ifvv" variant="dark">
          <Navbar.Brand href="#home">
            {this.props.title}
          </Navbar.Brand>
        </Navbar>
        <Container>
          <Row>
            <Col xs={1}></Col>
            <Col xs={10}><img src="img/logo.png" class="logo img-fluid" /></Col>
            <Col xs={1}></Col>
          </Row>
          <Row>
            <Col xs={1}></Col>
            <Col xs={10}>
              <Form>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Endereço de email</Form.Label>
                  <Form.Control onChange={this.whenChangeEmail.bind(this)} type="email" placeholder="Enter email" value={this.state.email}  />
                  <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text>
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Senha</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group controlId="formBasicChecbox">
                  <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="ifvv" block onClick={this.whenChangeEmail.bind(this)}>
                  Cadastrar
                </Button>
              </Form>
            </Col>
            <Col xs={1}></Col>
          </Row>
        </Container>
      </div>
    )
  }

  
}

export default Register;