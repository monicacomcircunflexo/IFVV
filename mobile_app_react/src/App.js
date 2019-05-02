import React, { Component } from 'react';
import './App.css';
import { Redirect } from "react-router-dom";


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
    return this.state.loggedIn ? (
      <Redirect to="/unburden" />
    ) : (
      <Redirect to="/login" />
    );
  }
}

export default App;
