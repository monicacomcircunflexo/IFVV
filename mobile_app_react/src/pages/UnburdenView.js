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
		user: JSON.parse(localStorage.getItem('user_info')) || {},
		form: {
			unburden: '',
			visibility: true,
			isAnonimaty: false
		}
	 }
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

	_createUnburden () {
		let unburdenModel = new Unburden;
		let unburden = this.state.form;
		unburden.cpf = this.state.user.cpf;
		//unburden.create_at = new Date.now();
		var _self = this;
    unburdenModel.store.create('unburden', unburden).then( async function(unburden) {
      _self.setState((prevState) => {
        prevState.form = {
					unburden: '',
					visibility: true,
					isAnonimaty: false
				};
        return prevState;
      });
		});
	}

	_updateField (event) {
    let value = event.target.value;
    let field = event.target.name;
    this.setState((prevState) => {
      prevState.form[field] = value;
      return prevState;
    });
	}
	
	_updateCheckBox(event) {
		let field = event.target.name;
    this.setState((prevState) => {
      prevState.form[field] = !prevState.form[field];
      return prevState;
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
									<Form.Control as="textarea" name="unburden" rows="3" placeholder="Escreva o que vc está passando" onChange={this._updateField.bind(this)} value={this.state.form.unburden} />
								</Form.Group>
								<Form.Group	>
									<Form.Check
										required
										label="Anônimo"
										name="isAnonimaty"
										checked={this.state.form.isAnonimaty}
										onChange={this._updateCheckBox.bind(this)}
									/>
									<Form.Check
										required
										name="visibility"
										label="Público ?"
										checked={this.state.form.visibility}
										onChange={this._updateCheckBox.bind(this)}
									/>
								</Form.Group	>
								<Button variant="ifvv" onClick={this._createUnburden.bind(this)}>
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
