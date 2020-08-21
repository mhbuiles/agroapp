import React from 'react';
import logo from './logo.svg';
import './App.css';
import Menu from './components/Menu'
import Home from './components/Home'
import ProductsList from './pages/ProductsList';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from 'react-router-dom';
import RegisterForm from './components/RegisterForm';
import TransporterForm from './components/TransporterForm';
import CustomerForm from './components/CustomerForm';
import ProducerPL from './components/ProducerPL';
import ProducerTL from './components/ProducerTL';
import UserProfile from './components/UserProfile';
import NewProduct from './components/NewProduct';

function test(){
  return(
    <h1>NO ESTAS REGISTRADO NO ESTAS REGISTRADO NO ESTAS REGISTRADO
      NO ESTAS REGISTRADO NO ESTAS REGISTRADO NO ESTAS REGISTRADO
    </h1>
  );
}

function App() {
  return (
    <div className="App">
      <Router>   
        <Menu />    
        <Switch>
          <Route exact path = '/' component = {Home}></Route>
          <Route exact path = '/ProductList' component = {ProductsList}></Route>
          <Route exact path = '/RegisterForm' component = {RegisterForm}></Route>          
          <Route exact path = '/UserProfile' component = {UserProfile}></Route>
          <Route exact path = '/ProducerPL' component = {ProducerPL}></Route>
          <Route exact path = '/ProducerTL' component = {ProducerTL}></Route>
          <Route exact path = '/NewProduct' component = {NewProduct}></Route>
          <Route exact path = '/test' component = {test}></Route>
          <Redirect from = '*' to = '/'></Redirect>          
        </Switch>
      </Router>
    </div>

  );
}

export default App;
