import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';

class Authenticator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn:false,
      token: localStorage.getItem('token')
    }
  }

  componentWillMount () {
    if ( this.state.token != null && this._tokenIsValid(this.state.token) ) {
      this.setState({loggedIn: true});
    }
  }

  async _tokenIsValid (token) {
    return true;
  }

  render() {
    return this.state.loggedIn ? (
      <div></div>
    ) : (
      <Redirect to="/" />
    );
  }
}

export default Authenticator;