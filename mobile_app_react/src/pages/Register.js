import React, { Component } from 'react';
import Header from './components/header_without_menu';
import { Navbar, Container, Row, Col, Form, Button, Modal } from 'react-bootstrap';
import './css/Register_cadastro.css';
import formatCpf from '@brazilian-utils/format-cpf';


class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cpf: '',
      name: '',
      birth_date: '',
      email: '',
      password: '',
      check_password: '',
      show: false,
      message:'Usuário cadastrado com sucesso',
      errors: {
        cpf: {
          status: false,
          msg: ''
        },
        name: {
          status: false,
          msg: ''
        },
        birth_date: {
          status: false,
          msg: ''
        },
        email: {
          status: false,
          msg: ''
        },
        password: {
          status: false,
          msg: ''
        },
        check_password: {
          status: false,
          msg: ''
        }
      }
    }
  }

  handleClose() {
    this.setState({ show: false });
  }

  _register () {
    console.log(this.state);
    var _self = this;
    fetch('http://localhost:3001/users', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(this.state)
    }).then(async function(response){
      if (response.ok) {
        let res = await response.json();  
        _self.setState((prevState) => {
          prevState.show = true;
          prevState.cpf = '';
          prevState.name = '';
          prevState.birth_date = '';
          prevState.email = '';
          prevState.password = '';
          prevState.check_password = '';
          prevState.message = res.confirm;
          return prevState;
        });
      } else if(response.status == 403)  {
        let res = await response.json();
        let newState = _self.state;
        _self._resetErrors();
        res.message.forEach(error => {
          newState.errors[error.param].status = true;
          newState.errors[error.param].msg = error.msg;
        });
        _self.setState(newState);
      }
    });
  }

  _resetErrors() {
    this.setState((prevState) => {
      prevState.errors = {
        cpf: {
          status: false,
          msg: ''
        },
        name: {
          status: false,
          msg: ''
        },
        birth_date: {
          status: false,
          msg: ''
        },
        email: {
          status: false,
          msg: ''
        },
        password: {
          status: false,
          msg: ''
        },
        check_password: {
          status: false,
          msg: ''
        }
      }
      return prevState;
    });
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
                  <Form.Control isInvalid={this.state.errors.name.status} type="text" name="name" placeholder="Nome completo" value={this.state.name}  onChange={this._updateField.bind(this)}/>
                  <Form.Control.Feedback type="invalid">{this.state.errors.name.msg}</Form.Control.Feedback>
                </Form.Group>
                <Form.Group controlId="formBasicCpf">
                  <Form.Label>CPF:</Form.Label>
                  <Form.Control isInvalid={this.state.errors.cpf.status} type="text" name="cpf" placeholder="CPF" value={formatCpf(this.state.cpf)} onChange={this._updateField.bind(this)}/>
                  <Form.Control.Feedback type="invalid">{this.state.errors.cpf.msg}</Form.Control.Feedback>
                </Form.Group>
                <Form.Group controlId="formBasicBirthDate">
                  <Form.Label>Data Nascimento:</Form.Label>
                  <Form.Control isInvalid={this.state.errors.birth_date.status} type="date" name="birth_date" placeholder="Data Nascimento:" value={this.state.birth_date} onChange={this._updateField.bind(this)}/>
                  <Form.Control.Feedback type="invalid">{this.state.errors.birth_date.msg}</Form.Control.Feedback>
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>E-mail:</Form.Label>
                  <Form.Control isInvalid={this.state.errors.email.status} type="email" name="email" placeholder="E-mail" value={this.state.email} onChange={this._updateField.bind(this)}/>
                  <Form.Control.Feedback type="invalid">{this.state.errors.email.msg}</Form.Control.Feedback>
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Senha:</Form.Label>
                  <Form.Control isInvalid={this.state.errors.password.status} type="password" name="password" placeholder="Senha" value={this.state.password} onChange={this._updateField.bind(this)}/>
                  <Form.Control.Feedback type="invalid">{this.state.errors.password.msg}</Form.Control.Feedback>
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Confirmar Senha:</Form.Label>
                  <Form.Control isInvalid={this.state.errors.check_password.status} type="password" name="check_password" placeholder="Senha" value={this.state.check_password} onChange={this._updateField.bind(this)}/>
                  <Form.Control.Feedback type="invalid">{this.state.errors.check_password.msg}</Form.Control.Feedback>
                </Form.Group>
                <Button variant="ifvv" block onClick={this._register.bind(this)}>
                  Cadastrar
                </Button>
              </Form>
            </Col>
            <Col xs={1}></Col>
          </Row>
        </Container>
        <Modal show={this.state.show} onHide={this.handleClose.bind(this)}>
          <Modal.Header closeButton>
            <Modal.Title>{this.state.message}</Modal.Title>
          </Modal.Header>
          <Modal.Footer>
            <Button variant="ifvv" onClick={this.handleClose.bind(this)}>
              Fechar
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    )
  }
}

export default Register;