import React, { Component } from 'react';
import Header from './components/header';
import { Navbar, Container, Row, Col, Form, Button } from 'react-bootstrap';
import Perfil from './components/perfil';
import './css/profile.css';

class profile extends Component {
  constructor(props){
  	super(props)
  }
  render() {
    return (
      <div>
        <Header title={this.props.title}  />
        <Container className='profile'>
         <Perfil/>
           <Row>
            <Col xs={1}></Col>
            <Col xs={10}>
              <Form>
                <Form.Group controlId="formBasicNome">
                  <Form.Label>Alterar Nome:</Form.Label>
                  <Form.Control  type="text" name="Alterar"/>
                </Form.Group>
                <Form.Group controlId="formBasicNome">
                  <Form.Label>Senha:</Form.Label>
                  <Form.Control  type="text" name="Senha"/>
                </Form.Group>
                <Form.Group controlId="formBasicNome">
                   <Form.Label>Confirmar senha:</Form.Label>
                  <Form.Control  type="text" name="Senha"/>
                </Form.Group>
                <Button variant="ifvv" block>
                  Salvar
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

export default profile;
