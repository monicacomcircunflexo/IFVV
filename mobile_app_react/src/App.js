import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button, Card } from 'react-bootstrap';
import { Route, Link } from "react-router-dom";
import Register from "./pages/Register";


class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Teste
            <Button variant="primary" onClick={this.disparaAlert}>Primary</Button>
          </p>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <Link to="/register">Cadastro</Link>
          <Link to="/login">Acessar</Link>
        </header>
      </div>
    );
  }
}

export default App;
