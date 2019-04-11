import React, { Component } from 'react';
import { Navbar, Container, Row, Col, Form, Button } from 'react-bootstrap';
import './Register_cadastro.css';

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
            <Col xs={10} className="logo">
              <img src="img/logo.png" class=" img-fluid" />
            </Col>
            <Col xs={1}></Col>
          </Row>
          <Row>
            <Col xs={1}></Col>
            <Col xs={10}>
              <Form>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Nome completo:</Form.Label>
                  <Form.Control type="nome" placeholder="Nome completo" value={this.state.email}  />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                  <Form.Label>CPF:</Form.Label>
                  <Form.Control type="number" placeholder="CPF" />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Data Nascimento:</Form.Label>
                  <Form.Control type="date" placeholder="Data Nascimento:" />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                  <Form.Label>E-mail:</Form.Label>
                  <Form.Control type="email" placeholder="E-mail" />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Senha:</Form.Label>
                  <Form.Control type="password" placeholder="Senha" />
                </Form.Group>
                <Button variant="ifvv" block>
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