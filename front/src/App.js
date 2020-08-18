import React from 'react';
import logo from './logo.svg';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from 'react-router-dom';
import ProductorForm from './components/ProductorForm';
import TransporterForm from './components/TransporterForm';
import CustomerForm from './components/CustomerForm';
import ProducerPL from './components/ProducerPL';
import ProducerTL from './components/ProducerTL';
import ProducerProfile from './components/ProducerProfile';
import Home from './components/Home';
import NewProduct from './components/NewProduct';

function App() {
  return (
    <Router>
      <nav>
        <Link to = '/'>Página de inicio</Link>
        <Link to = '/producerProfile'>Mi perfil</Link>
      </nav>
      <Switch>
        <Route exact path = '/' component = {Home}></Route>
        <Route exact path = '/ProductorForm' component = {ProductorForm}></Route>
        <Route exact path = '/TransporterForm' component = {TransporterForm}></Route>
        <Route exact path = '/CustomerForm' component = {CustomerForm}></Route>
        <Route exact path = '/ProducerProfile' component = {ProducerProfile}></Route>
        <Route exact path = '/ProducerPL' component = {ProducerPL}></Route>
        <Route exact path = '/ProducerTL' component = {ProducerTL}></Route>
        <Route exact path = '/NewProduct' component = {NewProduct}></Route>
        <Redirect from = '*' to = '/'></Redirect>
      </Switch>
    </Router>
  );
}

export default App;
