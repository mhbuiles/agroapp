import React from 'react';
import logo from './logo.svg';
import './App.css';

import ProductorForm from './components/ProductorForm'
import TransporterForm from './components/TransporterForm'
import CustomerForm from './components/CustomerForm'

function App() {
  return (
    <div className="App">
      <ProductorForm />
      <hr/>
      <TransporterForm />
      <hr/>
      <CustomerForm />
    </div>
  );
}

export default App;
