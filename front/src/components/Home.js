import React from 'react';
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
  width: 190px;
  border-radius: 5px;
  border: none;
  padding: 8px 8px;
  margin-top: 20px;
  background-color: #333;
  color: #fff;
`

const ButtonSubmit = styled.button`
  border-radius: 5px;
  border: none;
  padding: 8px 8px;
  margin-top: 20px;
  width: 190px;
`

const Title = styled.h1`
  font-weight: 600;
  color: white;
  text-shadow: 0px 0px 12px #333;
  margin-top: 50px;
`



function Home() {
  return (
    <HomeImg>
      <LoginCont>
        <Title>Bienvenido a Agroapp</Title>
        <ButtonSubmit>
          <Link to = '/Authentication'>Ingresar a mi perfil</Link>
        </ButtonSubmit>
        <ButtonRegister>
          <Link to = "/RegisterForm">Regístrate</Link>
        </ButtonRegister>
      </LoginCont>
    </HomeImg>
  )
}

export default Home;
