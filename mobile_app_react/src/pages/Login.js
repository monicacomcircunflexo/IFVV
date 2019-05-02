import React, { Component } from 'react';
import Header from './components/header';
import { Navbar, Container, Row, Col, Form, Button } from 'react-bootstrap';
import './css/Register_cadastro.css';
import {Redirect} from 'react-router-dom';
import formatCpf from '@brazilian-utils/format-cpf';


class Login extends Component{
	constructor(props) {
		super(props);
		this.state = {
			cpf: '',
			password: '',
			loggedIn: false
		}
	}

	componentWillMount() {
    if (localStorage.getItem('token') != null) {
      this.setState({loggedIn : true});
    }
  }

	_login () {
		var _self = this;
		fetch('http://localhost:3001/entrar', {
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
				_self.setState((prevState) => {
					prevState.loggedIn = true;
					return prevState;
				});
			}
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
		return this.state.loggedIn ? (
			<Redirect to="/" />
		): (
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
										<Form.Control  type="CPF" name="cpf" value={formatCpf(this.state.cpf)} placeholder="Digite seu CPF" 	 onChange={this._updateField.bind(this)}/>
									</Form.Group>
									<Form.Group controlId="formBasicPassword">
										<Form.Label>Senha:</Form.Label>
										<Form.Control type="password" name="password" value={this.state.password} placeholder="Password" onChange={this._updateField.bind(this)} />
									</Form.Group>
									<Button variant="ifvv" block onClick={this._login.bind(this)}>
										Acessar
									</Button>
								</Form>
							</Col>
							<Col xs={1}></Col>
						</Row>
					</Container>
				</div>
		);
	}
}

export default Login;