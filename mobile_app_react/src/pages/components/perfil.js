import React, { Component } from 'react';
import { Navbar} from 'react-bootstrap';
import '../css/perfil.css';

class Perfil extends Component{
	constructor(props){
		super(props)
	}
	 showSettings (event) {
   		 event.preventDefault();
 	 }
	 render () {
    	return (
    		<div className='perfil'>
	    		<div className='Perfil-img'>
	    		 	<img src={this.props.user.photo} />
		        </div>
		        <div className='Perfil-dados'>
		        	<h1>{this.props.user.name}</h1>
		        	<div className='Perfil-link'>
		        		<a>Editar perfil</a>
		        	</div>
		        </div>
	        </div>
    	)
	}
}


export default Perfil;	