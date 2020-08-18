import React from 'react';
import logo from './logo.svg';
import './App.css';
import Menu from './components/Menu'
import Home from './components/Home'

import ProductsList from './pages/ProductsList';


function App() {
  return (
    <div className="App">
      <Menu />
      <Home />     
      <ProductsList />
    </div>
  );
}

export default App;
