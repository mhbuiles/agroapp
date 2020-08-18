import React from 'react';
import Authentication from './Authentication';
import {mockusers} from './mock';
import styled from 'styled-components'

const HomeImg = styled.img`
    width: 100%;
`

function Home() {
  return (
    <div>
      <HomeImg src="https://i.pinimg.com/originals/49/f5/7f/49f57fc1113ac2cae9322f64cc5ad38a.jpg"></HomeImg>
      <h1>Bienvenido a Agroapp</h1>
      <h3>Ingresar a mi perfil</h3>
      <Authentication users = {mockusers}>Ingresar a mi perfil</Authentication>
    </div>
  )
}

export default Home;
