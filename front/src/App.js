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
import newProduct from './components/newProduct'

function App() {
  return (
    <Router>
      <nav>
        <Link to = '/'>Página de inicio</Link>
        <Link to = '/producerProfile'>Mi perfil</Link>
      </nav>
      <Switch>
        <Route exact path = '/' component = {Home}></Route>
        <Route exact path = '/productorForm' component = {ProductorForm}></Route>
        <Route exact path = '/transporterForm' component = {TransporterForm}></Route>
        <Route exact path = '/customerForm' component = {CustomerForm}></Route>
        <Route exact path = '/producerProfile' component = {ProducerProfile}></Route>
        <Route exact path = '/producerPL' component = {ProducerPL}></Route>
        <Route exact path = '/producerTL' component = {ProducerTL}></Route>
        <Route exact path = '/newProduct' component = {newProduct}></Route>
        <Redirect from = '*' to = '/'></Redirect>
      </Switch>
    </Router>
  );
}

export default App;
