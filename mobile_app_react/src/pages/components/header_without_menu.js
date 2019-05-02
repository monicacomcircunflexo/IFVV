import React, { Component } from 'react';
import { Navbar} from 'react-bootstrap';
import '../css/Register_cadastro.css';
import Perfil from './perfil'

class Header extends Component{
	constructor(props){
		super(props)
	}
	 showSettings (event) {
   		 event.preventDefault();
 	 }
	 render () {
    	return (
    		 <Navbar bg="ifvv" variant="dark" className="header">
	          <Navbar.Brand href="/">
	            {this.props.title}
	          </Navbar.Brand>
	        </Navbar>
    	)
	}
}


export default Header;	