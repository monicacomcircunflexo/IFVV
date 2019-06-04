import React, {Component} from 'react';
import Header from './components/header';
import Desabafo from './components/desabafo';
import {NavBar, Container, Row, Col,Form,Button} from 'react-bootstrap';
import './css/UnburdenView.css';
import Authenticator from './components/authenticator';
import Unburden from '../models/unburden';

class UnburdenView extends Component {
  constructor (props) {
	super(props);
	this.state = {
		desabafos:[],
		message:'',
		loggedIn: true,
		user: JSON.parse(localStorage.getItem('user_info'))
	 }
	 console.log(this.state);
	}

	componentWillMount () {
		let unburdenModel = new Unburden;
		unburdenModel.store.findAll('unburdens').then((unburdens) => {
			console.log(unburdens);
			this.setState({message: '', desabafos: unburdens});
		}).then((message) => {
			this.setState({message: 'Token expirado', desabafos: []});
		});
	}

  render() {

    return (
      <div>
				<Authenticator />
				<Header title={this.props.title} user={this.state.user}  />
				<Container className='postagens'>
					<Row className='postar_desabafo'>
						<Col sm={2} className='center-img'><img src={this.state.user.photo} className="img-fluid mr-3" /></Col>
						<Col sm={10}>
							<Form>
								<Form.Group controlId="exampleForm.ControlTextarea1">
									<Form.Control as="textarea" rows="3" placeholder="" />
								</Form.Group>
								<Form.Group	>
									<Form.Check
										required
										label="ANÔNIMO"
									/>
								</Form.Group	>
								<Button variant="ifvv" type="submit">
									DESABAFAR
								</Button>
							</Form>
						</Col>
					</Row>
					<div className='linha'></div>
					{
						this.state.desabafos.map(desabafo =>
						<Desabafo desabafo={desabafo.desabafo}  data={desabafo.data_postagem}/>
					)}
				</Container>
      </div>
    );
  }
}

export default UnburdenView;
