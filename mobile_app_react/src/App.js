import React, { Component } from 'react';
import './App.css';
import Authenticator from "./pages/components/authenticator"


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn : false
    }
  }

  componentWillMount() {
    if (localStorage.getItem('token') != null) {
      this.setState({loggedIn : true});
    }
  }

  render() {
    return (
      <Authenticator />
    );
  }
}

export default App;
