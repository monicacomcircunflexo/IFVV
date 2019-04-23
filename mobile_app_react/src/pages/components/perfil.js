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
	    		 	<img src='http://www.motta.com.br/wp-content/uploads/2018/09/80298-1-400x370.jpg' />
		        </div>
		        <div className='Perfil-dados'>
		        	<h1>Marcos Lopes</h1>
		        	<div className='Perfil-link'>
		        		<a>Editar perfil</a>
		        	</div>
		        </div>
	        </div>
    	)
	}
}


export default Perfil;	