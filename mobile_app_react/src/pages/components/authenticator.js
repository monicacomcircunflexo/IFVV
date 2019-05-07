import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import User from '../../models/users';

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
      this.setState({loggedIn: false});
    }
  }

  async _tokenIsValid (token) {
    let userModel = new User();
    return await userModel.store.getMapper('user').isValidToken().then(async function(user) {
      return user.data.success;
    }, async function(user){
      return user.data.success;
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