import React, { Component } from 'react';
import Header from './components/header_without_menu';
import { Navbar, Container, Row, Col, Form, Button,Alert } from 'react-bootstrap';
import './css/Register_cadastro.css';
import {Redirect} from 'react-router-dom';
import formatCpf from '@brazilian-utils/format-cpf';
import Authenticator from './components/authenticator';


class Login extends Component{
	constructor(props) {
		super(props);
		this.state = {
			cpf: '',
			password: '',
			show:false,
			message: '',
			errors: {
		        cpf: {
		          status: false,
		          msg: ''
		        },
		        password: {
		          status: false,
		          msg: ''
		        }
	      	}
		}
	}

	_login () {
		var _self = this;
		fetch('http://localhost:3001/system/login', {
			method: 'POST',
			headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(this.state)
		}).then(async function(response){
			let info = await response.json();
			console.log(info);
			if (response.status == 200) {
				localStorage.setItem('token', info.token);
				localStorage.setItem('user_info', JSON.stringify(info.user));
				_self.setState((prevState) => {
					prevState.loggedIn = true;
					return prevState;
				});
			}else if(response.status == 403)  {
		        let newState = _self.state;
		        _self._resetErrors();
		        info.message.forEach(error => {
		          newState.errors[error.param].status = true;
		          newState.errors[error.param].msg = error.msg;
		        });
		        _self.setState(newState);
	      	} else if(response.status == 401){
	      		 _self._resetErrors();
	      		_self.setState((prevState) => {
					prevState.show = true;
					prevState.message = info.message;
					return prevState;
				});
	      	}
		});
	}
	 _resetErrors() {
	    this.setState((prevState) => {
	      prevState.errors = {
	        cpf: {
	          status: false,
	          msg: ''
	        },
	        password: {
	          status: false,
	          msg: ''
	        }
	      }
	      return prevState;
	    });
	 }
	_updateField (event) {
    let value = event.target.value;
    let field = event.target.name;
    this.setState((prevState) => {
      prevState[field] = value;
      return prevState;
    });
  }

	render () {
		return this.state.loggedIn ? (<Redirect to="/unburden" />) : (
				<div>
					<Header title={this.props.title}  />
					<Container>
						<Row>
							<Col xs={1}></Col>
							<Col xs={10} className="logo"><img src="img/logo.png" class="img-fluid" /></Col>
							<Col xs={1}></Col>
						</Row>
						<Row>
							<Col xs={1}></Col>
							<Col xs={10}>
								<Form>
									<Form.Group controlId="formBasicEmail">
										<Form.Label>CPF:</Form.Label>
										<Form.Control isInvalid={this.state.errors.cpf.status}  type="CPF" name="cpf" value={formatCpf(this.state.cpf)} placeholder="Digite seu CPF" 	 onChange={this._updateField.bind(this)}/>
										<Form.Control.Feedback type="invalid">{this.state.errors.cpf.msg}</Form.Control.Feedback>
									</Form.Group>
									<Form.Group controlId="formBasicPassword">
										<Form.Label>Senha:</Form.Label>
										<Form.Control isInvalid={this.state.errors.password.status}  type="password" name="password" value={this.state.password} placeholder="Password" onChange={this._updateField.bind(this)} />
										<Form.Control.Feedback type="invalid">{this.state.errors.password.msg}</Form.Control.Feedback>
									</Form.Group>
									<Button variant="ifvv" block onClick={this._login.bind(this)}>
										Acessar
									</Button>
									<Button variant="ifvv" block href='/register'>
										Cadastrar
									</Button>
								</Form>
								<Alert  show={this.state.show} className="espaço-bottom" variant="danger">
									{this.state.message}
								</Alert>
							</Col>
							<Col xs={1}></Col>
						</Row>
					</Container>
				</div>
		);
	}
}

export default Login;