import React, {Component} from 'react';
import Header from './components/header';
import {NavBar, Container, Row, Col,Form,Button} from 'react-bootstrap';
import './css/UnburdenView.css';

class Responder extends Component {

  render() {
    return (
      <div>
        <Header title={this.props.title}  />
        <Container className='postagens'>
          <Row>
              <Col xs={12} className="logo">
                <img src="img/logo.png"  />
              </Col>
                <Col sm={12}>
                  <Form>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                     <Form.Control as="textarea" rows="3" placeholder="Digite sua resposta!" />
                    </Form.Group>
                  </Form>
                   <Button href='unburden' variant="ifvv" type="submit">RESPONDER</Button>
                </Col>
          </Row>
		      </Container>
      </div>
    );
  }

}

export default Responder;
