import React, { Component } from 'react';
import Header from './components/header';
import Desabafo from './components/desabafo';
import { Navbar, Container, Row, Col, Form, Button } from 'react-bootstrap';
import './css/UnburdenList.css';
import Unburden from './../models/unburden';
import Authenticator from './components/authenticator';


class UnburdenList extends Component {

	constructor (props) {
		super(props);
		this.state = {
			desabafos:[],
			message:'',
			loggedIn: true,
			user: JSON.parse(localStorage.getItem('user_info')) || {}
		 }
		}

	componentWillMount () {
		let unburdenModel = new Unburden();
		unburdenModel.store.findAll('unburdens').then((unburdens) => {
			console.log(unburdens);
		});
	}
	renderUnburden(unburden) {
		return <Desabafo unburden={unburden} key={unburden.key} />
	}
  render() {
    return (
      <div>
				<Authenticator />
        <Header title={this.props.title} user={this.state.user}  />
        <Container className='postagens'>
        <Row>
					<Col sm={1}></Col>
					<Col sm={2} className="">
						<img src={this.state.user.photo} className="img-fluid img-thumbnail" />
					</Col>
					<Col sm={8} className="nameCol">
						<h4>{this.state.user.name}</h4>
					</Col>
					<Col sm={1}></Col>
        </Row>
				
		    <div className='linha'></div>
				{this.state.desabafos.map(this.renderUnburden.bind(this))}
		</Container>
      </div>
    );
  }

}

export default UnburdenList;