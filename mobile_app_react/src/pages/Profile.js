import React, { Component } from 'react';
import Header from './components/header';
import { Navbar, Container, Row, Col, Form, Button } from 'react-bootstrap';
import Perfil from './components/perfil';
import Authenticator from './components/authenticator';
import './css/profile.css';


class Profile extends Component {
  constructor(props){
    super(props);
    this.state = {
      user: JSON.parse(localStorage.getItem('user_info'))
    }
    console.log(this.state);
  }
  render() {
    return (
      <div>
        <Authenticator />
        <Header title={this.props.title} user={this.state.user} />
        <Container className='profile'>
         <Perfil user={this.state.user} />
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

export default Profile;
