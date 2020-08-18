import React from 'react';
import Authentication from './Authentication';
import {mockusers} from './mock';
import styled from 'styled-components'

const HomeImg = styled.div`
    width: 100%;
    background-image: url("https://i.pinimg.com/originals/49/f5/7f/49f57fc1113ac2cae9322f64cc5ad38a.jpg");
    height: 100vh;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
`
const LoginCont = styled.div`
    display: flex;
    flex-direction: column;    
    height: 100vh;
    justify-content: center;
    align-items: center;
    color: #fff;
`



function Home() {
  return (
    <HomeImg>     
      <LoginCont> 
        <h1>Bienvenido a Agroapp</h1>
        <h3>Iniciar sesión</h3>
        <Authentication users = {mockusers}>Ingresar a mi perfil</Authentication>
      </LoginCont>      
    </HomeImg>
  )
}

export default Home;
