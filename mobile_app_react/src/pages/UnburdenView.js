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
	this.state ={
		desabafos:[],
		message:''
	 }
	}

	componentWillMount () {
		let unburdenModel = new Unburden;
		unburdenModel.store.findAll('unburdens').then((unburdens) => {
			this.setState({message: '', desabafos: unburdens})
		});
	}
  // componentWillMount(){
  // 	  var _self = this;

  // 	 fetch('http://localhost:3001/todos/desabafos', {
  //     method: 'GET'
  //   }).then(async function(response){
  //     if (response.ok) {
  //       let res = await response.json();
  //       _self.setState((prevState) => {
  //         prevState.desabafos = res.desabafos;
  //         return prevState;
  //       });        
  //     } else if(response.status == 403)  {
  //       let res = await response.json();
 	// 	_self.setState((prevState)=>{
 	// 		prevState.message = res.message;
 	// 		return prevState;
 	// 	});
  //     }
  //   });
  // }

  render() {

    return (
      <div>
				<Authenticator />
				<Header title={this.props.title}  />
				<Container className='postagens'>
					<Row className='postar_desabafo'>
						<Col sm={2} className='center-img'><img src="http://www.motta.com.br/wp-content/uploads/2018/09/80298-1-400x370.jpg" className="img-fluid mr-3" /></Col>
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
					{this.state.desabafos.map(desabafo =>
						<Desabafo desabafo={desabafo.desabafo}  data={desabafo.data_postagem}/>
					)}
				</Container>
      </div>
    );
  }
}

export default UnburdenView;
