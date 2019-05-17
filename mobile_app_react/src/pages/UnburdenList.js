import React, { Component } from 'react';
import Header from './components/header';
import DesabafoPessoal from './components/desabafoPessoal'
import { Navbar, Container, Row, Col, Form, Button } from 'react-bootstrap';
import './css/Register_cadastro.css';
import Unburden from './../models/unburden';


class UnburdenList extends Component {

	constructor (props) {
		super(props);

	}

	componentWillMount () {
		let unburdenModel = new Unburden();
		unburdenModel.store.findAll().then((unburdens) => {
			console.log(unburdens);
		});
	}
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
		    	<DesabafoPessoal />
		    	<DesabafoPessoal />
		    	<DesabafoPessoal />
		    	<DesabafoPessoal />
		    	<DesabafoPessoal />
		    	<DesabafoPessoal />
		    	<DesabafoPessoal />
		    	<DesabafoPessoal />
		    	<DesabafoPessoal />
		    	<DesabafoPessoal />
		    	<DesabafoPessoal />
		    	<DesabafoPessoal />
		    	<DesabafoPessoal />
		    	<DesabafoPessoal />
		    	<DesabafoPessoal />
		    	<DesabafoPessoal />
		    	<DesabafoPessoal />
		    	<DesabafoPessoal />
		    	<DesabafoPessoal />
		    	<DesabafoPessoal />
		    	<DesabafoPessoal />
		    	<DesabafoPessoal />
		    	<DesabafoPessoal />
		    	<DesabafoPessoal />
		    	<DesabafoPessoal />
		    	<DesabafoPessoal />		    	
		    </Row>
		</Container>
      </div>
    );
  }

}

export default UnburdenList;