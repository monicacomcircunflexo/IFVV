import React, { Component } from 'react';
import Header from './components/header';
import DesabafoPessoal from './components/desabafoPessoal'
import { Navbar, Container, Row, Col, Form, Button } from 'react-bootstrap';
import './css/Register_cadastro.css';
// import './css/UnburdenList.css';
// import './css/desabafoPessoal.css';


class UnburdenList extends Component {

  render() {
    return (
      <div>
        <Header title={this.props.title}  />
        <Container className='postagens'>
		    <div className='linha'></div>
		    <Row>
		    	<DesabafoPessoal />
		    	<DesabafoPessoal />
		    	<DesabafoPessoal />
		    	<DesabafoPessoal />
		    	<DesabafoPessoal />
		    	<DesabafoPessoal />
		    	<DesabafoPessoal />
		    	<DesabafoPessoal />
		    	<DesabafoPessoal />
		    	<DesabafoPessoal />
		    	<DesabafoPessoal />
		    	<DesabafoPessoal />
		    	<DesabafoPessoal />
		    	<DesabafoPessoal />
		    	<DesabafoPessoal />
		    	<DesabafoPessoal />
		    	<DesabafoPessoal />
		    	<DesabafoPessoal />
		    	<DesabafoPessoal />
		    	<DesabafoPessoal />
		    	<DesabafoPessoal />
		    	<DesabafoPessoal />
		    	<DesabafoPessoal />
		    	<DesabafoPessoal />
		    	<DesabafoPessoal />
		    	<DesabafoPessoal />		    	
		    </Row>
		</Container>
      </div>
    );
  }

}

export default UnburdenList;