import React, { Component } from 'react';
import { Navbar} from 'react-bootstrap';
import {NavBar, Container, Row, Col,Form,Button} from 'react-bootstrap';
import '../css/desabafo.css';

class Desabafo extends Component{
	 constructor(props){
		 super(props);
		 console.log(this.props);
	 }
	 render () {
    	return (
    		<Row sm={12} className='desabafo_container'>
    		 	<Col sm={2} className='center-img'>
    		 		<img src={!this.props.unburden.isAnonimaty?this.props.unburden.user.photo:"/img/logo.png"} className="img-fluid mr-3 img-thumbnail" />
    		 	</Col>
    		 	<Col sm={10}>
						<h6>{!this.props.unburden.isAnonimaty?this.props.unburden.user.name:"Anônimo"}</h6>
    		 		<p>{this.props.unburden.unburden}</p>
            <span>{this.props.unburden.create_at}</span>
						<p>
							<a href='responder'> RESPONDER</a>
						</p>
          </Col>
	      </Row>
    	)
	}
}


export default Desabafo;	