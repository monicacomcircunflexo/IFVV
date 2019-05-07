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
    		 		<img src="http://www.motta.com.br/wp-content/uploads/2018/09/80298-1-400x370.jpg" class="img-fluid mr-3" />
    		 	</Col>
    		 	<Col sm={10}>
    		 		<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
					tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
					quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
					consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
					cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
					proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
					<a href='comentarios'>RESPONDER</a>
    		 	</Col>
	        </Row>
    	)
	}
}


export default Desabafo;	