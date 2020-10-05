import React , { useEffect } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  useHistory,
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
import AboutUs from './pages/AboutUs'
import ProductView from './pages/ProductView';
import MyProductView from './pages/MyProductView';
import Cart from './pages/Cart';
import Response from './pages/Response';
import TransactionView from './pages/TransactionView';

function PrivateRoute(props) {
  const history = useHistory();

  useEffect(() => {
    const token = localStorage.getItem('token');

    if(!token) {
      history.push('/Authentication')
    }
  } , [history]  );

  return (
    <Route {...props} />
  );
}


function App() {
  return (
    <div className="App">
      <Router>
        <Menu />
        <Switch>
          <Route exact path = '/RegisterForm' component = {RegisterForm}></Route>
          <Route exact path = '/about' component={AboutUs}></Route>
          <Route exact path="/Authentication" component={Authentication}></Route>
          <Route exact path = '/' component = {Home}></Route>
          <PrivateRoute exact path = '/ProducerPL' component = {ProducerPL}></PrivateRoute>
          <PrivateRoute exact path = '/ProducerTL' component = {ProducerTL}></PrivateRoute>
          <PrivateRoute exact path = '/NewProduct' component = {NewProduct}></PrivateRoute>
          <PrivateRoute exact path="/UserProfile" component={UserProfile}></PrivateRoute>
          <PrivateRoute exact path="/ProductsList" component={ProductsList}></PrivateRoute>
          <PrivateRoute exact path="/UserProfile/ProducerPL/MyProductView/:id" component={MyProductView}></PrivateRoute>
          <Route path="/ProductsList/ProductView/:id">
            <ProductView />
          </Route>
          <PrivateRoute exact path="/Cart" component={Cart}></PrivateRoute>
          <PrivateRoute exact path="/response" component={Response}></PrivateRoute>
          <PrivateRoute exact path="/ProducerTL/Transactions/:id" component={TransactionView}></PrivateRoute>
          <Redirect from = '*' to = '/'></Redirect>
        </Switch>
      </Router>
    </div>

  );
}

export default App;
