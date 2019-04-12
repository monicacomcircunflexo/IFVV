import React, {Component} from 'react';
import Header from './header';
import {NavBar, Container, Row, Col, Media, MediaBody} from 'react-bootstrap';
//import './UnburdenView.css';

class UnburdenView extends Component {

  render() {
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
	            <Col xs={3}><img src="img/girl.png" class="img-fluid mr-3" /></Col>
	            <Col xs={7}><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p></Col>
	            <Col xs={1}></Col>
		    </Row>
		</Container>
      </div>
    );
  }

}

export default UnburdenView;
