import React from 'react';
import Authentication from './Authentication';
import {mockusers} from './mock';
import { Link } from 'react-router-dom';
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
const ButtonRegister = styled.button`
  width: 130px;
  border-radius: 5px;
  border: none;
  padding: 8px 8px;
  margin-top: 20px;
  background-color: #333;
  color: #fff;
`

const Title = styled.h1`
  font-weight: 600;
  color: white;
  text-shadow: 0px 0px 12px #333;
`



function Home() {
  return (
    <HomeImg>     
      <LoginCont> 
        <Title>Bienvenido a Agroapp</Title>
        <Title>Iniciar sesión</Title>
        <Authentication users = {mockusers}>Ingresar a mi perfil</Authentication>
        <ButtonRegister>
          <Link to = "/RegisterForm">Regístrate</Link>
        </ButtonRegister>
      </LoginCont>      
    </HomeImg>
  )
}

export default Home;
