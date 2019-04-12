import React, { Component } from 'react';
import Header from './header';
import { Navbar, Container, Row, Col, Form, Button } from 'react-bootstrap';
import './Register_cadastro.css';
import formatCpf from '@brazilian-utils/format-cpf';


class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cpf: '37452845854',
      name: '',
      birth_date: '',
      email: '',
      password: '',
      check_password: ''
    }
  }

  _register () {
    console.log(this.state);
  }

  _updateField (event) {
    let value = event.target.value;
    let field = event.target.name;
    this.setState((prevState) => {
      prevState[field] = value;
      return prevState;
    });
  }

  render () {
    return (
      <div>
       <Header title={this.props.title} />
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
                <Form.Group controlId="formBasicNome">
                  <Form.Label>Nome completo:</Form.Label>
                  <Form.Control type="text" name="name" placeholder="Nome completo" value={this.state.name}  onChange={this._updateField.bind(this)}/>
                </Form.Group>
                <Form.Group controlId="formBasicCpf">
                  <Form.Label>CPF:</Form.Label>
                  <Form.Control type="text" name="cpf" placeholder="CPF" value={formatCpf(this.state.cpf)} onChange={this._updateField.bind(this)}/>
                </Form.Group>
                <Form.Group controlId="formBasicBirthDate">
                  <Form.Label>Data Nascimento:</Form.Label>
                  <Form.Control type="date" name="birth_date" placeholder="Data Nascimento:" value={this.state.birth_date} onChange={this._updateField.bind(this)}/>
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>E-mail:</Form.Label>
                  <Form.Control type="email" name="email" placeholder="E-mail" value={this.state.email} onChange={this._updateField.bind(this)}/>
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Senha:</Form.Label>
                  <Form.Control type="password" name="password" placeholder="Senha" value={this.state.password} onChange={this._updateField.bind(this)}/>
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Confirmar Senha:</Form.Label>
                  <Form.Control type="password" name="check_password" placeholder="Senha" value={this.state.check_password} onChange={this._updateField.bind(this)}/>
                </Form.Group>
                <Button variant="ifvv" block onClick={this._register.bind(this)}>
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