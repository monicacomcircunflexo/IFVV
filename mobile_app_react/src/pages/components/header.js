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
<<<<<<< HEAD
		        <a id="" className="menu-item" href="/unburdenList">Desabafos Pessoais</a>
		        <a id="" className="menu-item" href="/comentarios">Comentarios</a>
=======
		        <a id="" className="menu-item" href="/unburdenList">Lista de Desabafos</a>
>>>>>>> 10d8b8721b220967e265afe439eef99bc2be1265
		      </Menu>	
	        </div>
    	)
	}
}


export default Header;	