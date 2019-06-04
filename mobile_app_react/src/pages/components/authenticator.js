import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import System from '../../models/system';

class Authenticator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn:true,
      token: localStorage.getItem('token')
    }
  }

  async componentWillMount () {
    if ( this.state.token != null && await this._tokenIsValid(this.state.token) ) {
      this.setState({loggedIn: true});
    } else {
      localStorage.setItem('token', '');
      this.setState({loggedIn: false});
    }
  }

  async _tokenIsValid (token) {
    let systemModel = new System();
    return await systemModel.store.getMapper('system').isValidToken().then(async function(system) {
      localStorage.setItem('user_info', JSON.stringify(system.data.user));
      return system.data.success;
    }, async function(system){
      console.log(system);
      return system.data.success;
    });
  }

  render() {
    return this.state.loggedIn ? (
      <div></div>
    ) : (
      <Redirect to="/login" />
    );
  }
}

export default Authenticator;