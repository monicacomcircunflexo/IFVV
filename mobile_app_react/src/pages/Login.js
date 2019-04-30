import React, { Component } from 'react';
import Header from './components/header_without_menu';
import { Navbar, Container, Row, Col, Form, Button } from 'react-bootstrap';
import './css/Register_cadastro.css';

class Login extends Component{
	 render () {
    	return (
    		  <div>
		        <Header title={this.props.title}  />
		        <Container>
		          <Row>
		            <Col xs={1}></Col>
		            <Col xs={10} className="logo"><img src="img/logo.png" class="img-fluid" /></Col>
		            <Col xs={1}></Col>
		          </Row>
		          <Row>
		            <Col xs={1}></Col>
		            <Col xs={10}>
		              <Form>
		                <Form.Group controlId="formBasicEmail">
		                  <Form.Label>CPF:</Form.Label>
		                  <Form.Control  type="CPF" placeholder="Digite seu CPF" 	 />
		                </Form.Group>
		                <Form.Group controlId="formBasicPassword">
		                  <Form.Label>Senha:</Form.Label>
		                  <Form.Control type="password" placeholder="Password" />
		                </Form.Group>
		                <Form.Group controlId="formBasicChecbox">
		                  <Form.Check type="checkbox" label="Manter conectado" />
		                </Form.Group>
		                <Button variant="ifvv" block >
		                  Acessar
		                </Button>
		              </Form>
		            </Col>
		            <Col xs={1}></Col>
		          </Row>
		        </Container>
		      </div>
    	);
     }
}

export default Login;