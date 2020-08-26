import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  withRouter
} from 'react-router-dom';
import Menu from './components/Menu'
import Home from './components/Home'
import ProductsList from './pages/ProductsList';
import RegisterForm from './components/RegisterForm';
import ProducerPL from './components/ProducerPL';
import ProducerTL from './components/ProducerTL';
import UserProfile from './components/UserProfile';
import NewProduct from './components/NewProduct';
import Authentication from './components/Authentication';


class PRoute extends React.Component {
  componentDidMount() {
    const token = localStorage.getItem('token');

    if(!token) {
      this.props.history.push('/Authentication');
    }
  }

  render() {
    return (
      <Route {...this.props} />
    )
  }
}

const PrivateRoute = withRouter(PRoute);


function App() {
  return (
    <div className="App">
      <Router>
        <Menu />
        <Switch>
          <Route exact path = '/' component = {Home}></Route>
          <Route exact path = '/RegisterForm' component = {RegisterForm}></Route>
          <PrivateRoute exact path = '/ProducerPL' component = {ProducerPL}></PrivateRoute>
          <PrivateRoute exact path = '/ProducerTL' component = {ProducerTL}></PrivateRoute>
          <PrivateRoute exact path = '/NewProduct' component = {NewProduct}></PrivateRoute>
          <PrivateRoute exact path="/UserProfile" component={UserProfile}></PrivateRoute>
          <PrivateRoute exact path="/ProductsList" component={ProductsList}></PrivateRoute>
          <PrivateRoute exact path="/Authentication" component={Authentication}></PrivateRoute>
          <Redirect from = '*' to = '/'></Redirect>
        </Switch>
      </Router>
    </div>

  );
}

export default App;
