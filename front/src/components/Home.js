import React from 'react';
import Authentication from './Authentication';
import {mockusers} from './mock';

function Home() {
  return (
    <div>
      <h1>Bienvenido a Agroapp</h1>
      <h3>Ingresar a mi perfil</h3>
      <Authentication users = {mockusers}>Ingresar a mi perfil</Authentication>
    </div>
  )
}

export default Home;
