import React, { Component } from 'react';
import { Navbar} from 'react-bootstrap';
import {NavBar, Container, Row, Col,Form,Button} from 'react-bootstrap';
import '../css/desabafo.css';

class Desabafo extends Component{
	 constructor(props){
	 	super(props);
	 }
	 render () {
    	return (
    		<Row sm={12} className='desabafo_container'>
    		 	<Col sm={2} className='center-img'>
    		 		<img src="http://www.motta.com.br/wp-content/uploads/2018/09/80298-1-400x370.jpg" className="img-fluid mr-3" />
    		 	</Col>
    		 	<Col sm={10}>
    		 		<p>{this.props.desabafo}</p>
            <span>{this.props.data}</span>
					<a href='responder'> RESPONDER</a>
                </Col>
	        </Row>
    	)
	}
}


export default Desabafo;	