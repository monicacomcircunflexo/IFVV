import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';

class Authenticator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn:false
    }
  }

  componentWillMount () {
    if (localStorage.getItem('token') != null) {
      this.setState({loggedIn: true});
    }
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