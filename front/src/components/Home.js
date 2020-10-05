import React from 'react';
import { Link } from 'react-router-dom';
import './ComponentsCSS/Home.css'


function Home() {
  return (
    <div className='homeImg'>
      <div className='homeLoginCont'>
        <h1 className='homeTitle'>Bienvenido a Agroapp</h1>
        <button className='homeButtonSubmit'>
          <Link to = '/Authentication'>Ingresar a mi perfil</Link>
        </button>
        <button className='homeButtonRegister'>
          <Link to = "/RegisterForm">Regístrate</Link>
        </button>
      </div>
    </div>
  )
}

export default Home;
