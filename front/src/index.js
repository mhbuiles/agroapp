import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { transitions, positions, Provider as AlertProvider } from 'react-alert'
import { Redirect } from 'react-router-dom';
import AlertTemplate from 'react-alert-template-basic'


// optional configuration for React Alert
const options = {  
  position: positions.TOP_CENTER,    
  offset: '15px', 
  timeout: 4000,
  transition: transitions.SCALE,
  containerStyle: {
    zIndex: 100, 
    padding: "50px 5px"   
  }
}

ReactDOM.render(
  <Provider store = {store}>
    <React.StrictMode>
      <AlertProvider template={AlertTemplate} {...options}>
        <App />
      </AlertProvider>
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
