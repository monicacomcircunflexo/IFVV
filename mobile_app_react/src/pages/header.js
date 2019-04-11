import React, { Component } from 'react';
import { Navbar} from 'react-bootstrap';



class Header extends Component{
	constructor(props){
		super(props)
	}
	 render () {
    	return (
    		 <Navbar bg="ifvv" variant="dark">
	          <Navbar.Brand href="#home">
	            {this.props.title}
	          </Navbar.Brand>
	        </Navbar>
    	)
	}
}


export default Header;	