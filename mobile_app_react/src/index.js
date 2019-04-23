import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Register from './pages/Register';
import Login from './pages/Login';
import Profile from './pages/Profile';
import UnburdenView from './pages/UnburdenView';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Switch} from "react-router-dom";

ReactDOM.render(
<BrowserRouter>
  <Switch>
    <Route path="/" exact={true} component={App} />
    <Route path="/register" render= {props => <Register title="IFVV - Novo membro" />} />
    <Route path="/login" render= {props => <Login title="IFVV " />} />
    <Route path="/unburden" render={props => <UnburdenView title="IFVV " />} />
    <Route path="/perfil" render={props => <Profile title="IFVV " />} />
  </Switch>
</BrowserRouter>, document.getElementById('root'));

serviceWorker.unregister();
