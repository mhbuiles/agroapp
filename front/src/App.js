import React , { useEffect } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  useHistory,
  useParams
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

function PrivateRoute(props) {
  const history = useHistory();

  useEffect(() => {
    const token = localStorage.getItem('token');

    if(!token) {
      history.push('/Authentication')
    }
  } , []  );

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
          <PrivateRoute exact path="/Authentication" component={Authentication}></PrivateRoute>
          <PrivateRoute exact path="/UserProfile/ProducerPL/MyProductView/:id" component={MyProductView}></PrivateRoute>
          <Route path="/ProductsList/ProductView/:id">
            <ProductView />
          </Route>

          <Redirect from = '*' to = '/'></Redirect>
        </Switch>
      </Router>
    </div>

  );
}

export default App;
