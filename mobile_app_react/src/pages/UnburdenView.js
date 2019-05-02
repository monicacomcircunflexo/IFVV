import React, {Component} from 'react';
import Header from './components/header';
import Desabafo from './components/desabafo';
import {NavBar, Container, Row, Col,Form,Button} from 'react-bootstrap';
import './css/UnburdenView.css';
import Authenticator from './components/authenticator';

class UnburdenView extends Component {
	constructor (props) {
		super(props);
	}
  render() {
    return (
      <div>
				<Authenticator />
        <Header title={this.props.title}  />
        <Container className='postagens'>
		   <Row className='postar_desabafo'>
	            <Col sm={2} className='center-img'><img src="http://www.motta.com.br/wp-content/uploads/2018/09/80298-1-400x370.jpg" class="img-fluid mr-3" /></Col>
	            <Col sm={10}>
	            	<Form>
	            		<Form.Group controlId="exampleForm.ControlTextarea1">
						    <Form.Control as="textarea" rows="3" placeholder="Sou macho alfa" />
						</Form.Group>
	            	</Form>
	            	<Form.Group	>
			          <Form.Check
			            required
			            label="ANONIMO"
			     	/>
			        </Form.Group	>
	            	 <Button variant="ifvv" type="submit">
					    DESABAFAR
					 </Button>
	            </Col>
		    </Row>
		    <div className='linha'></div>
		    <Row>
		    	<Desabafo />
		    	<Desabafo />
		    	<Desabafo />
		    	<Desabafo />	
		    	<Desabafo />
		    	<Desabafo />
		    	<Desabafo />
		    	<Desabafo />
		    	<Desabafo />
		    	<Desabafo />
		    	<Desabafo />
		    	<Desabafo />
		    	<Desabafo />
		    	<Desabafo />
		    	<Desabafo />
		    	<Desabafo />
		    	<Desabafo />
		    	<Desabafo />
		    	<Desabafo />
		    	<Desabafo />
		    	<Desabafo />
		    	<Desabafo />
		    	<Desabafo />
		    	<Desabafo />
		    	<Desabafo />
		    	<Desabafo />
		    </Row>
		</Container>
      </div>
    );
  }

}

export default UnburdenView;
