import React, { Component } from 'react';
import { Navbar} from 'react-bootstrap';
import { slide as Menu } from 'react-burger-menu'
import './Register_cadastro.css';

class Header extends Component{
	constructor(props){
		super(props)
	}
	 showSettings (event) {
   		 event.preventDefault();
 	 }
	 render () {
    	return (
    		<div>
    		 <Navbar bg="ifvv" variant="dark" className="header">
	          <Navbar.Brand href="/">
	            {this.props.title}
	          </Navbar.Brand>
	        </Navbar>
	         <Menu pageWrapId = { " page-wrap " } className='sidebar'>
		        <a id="home" className="menu-item" href="/register">Cadastrar</a>
		        <a id="about" className="menu-item" href="/login">Login</a>
		        <a id="" className="menu-item" href="/unburdenView">Desabafos Alheios</a>
		      </Menu>	
	        </div>
    	)
	}
}


export default Header;	