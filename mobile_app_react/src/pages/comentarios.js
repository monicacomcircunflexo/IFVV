import React, {Component} from 'react';
import Header from './components/header';
import Comentario from './components/comentario';
import {NavBar, Container, Row, Col,Form,Button} from 'react-bootstrap';
import './css/UnburdenView.css';

class Comentarios extends Component {

  render() {
    return (
      <div>
        <Header title={this.props.title}  />
        <Container className='postagens'>
         <Row>
            <Col xs={1}></Col>
            <Col xs={10} className="logo">
              <img src="img/logo.png" class=" img-fluid" />
            </Col>
            <Col xs={1}></Col>
          </Row>
		    <div className='linha'></div>
		    <Row>
		    	<Comentario />
		    	<Comentario />
		    	<Comentario />
		    	<Comentario />
		    	<Comentario />
		    	<Comentario />
		    	<Comentario />
		    </Row>
		</Container>
      </div>
    );
  }

}

export default Comentarios;
