import React, { Component } from 'react';
import { Navbar} from 'react-bootstrap';
import { slide as Menu } from 'react-burger-menu'
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
    		<div>
    		 <Navbar bg="ifvv" variant="dark" className="header">
	          <Navbar.Brand href="/">
	            {this.props.title}
	          </Navbar.Brand>
	        </Navbar>
	         <Menu pageWrapId = { " page-wrap " } className='sidebar'>
	         	<Perfil />
	         	<a id="perfil" className="menu-item" href="/perfil">Perfil</a>
		        <a id="" className="menu-item" href="/unburden">Desabafos Alheios</a>
		        <a id="" className="menu-item" href="/unburdenList">Desabafos Pessoais</a>
		      </Menu>	
	        </div>
    	)
	}
}


export default Header;	