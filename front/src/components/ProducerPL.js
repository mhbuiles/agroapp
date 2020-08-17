import React from 'react';
import styled from 'styled-components';
import {
  Link
} from 'react-router-dom';
import {mockproducts} from './mock';
import Products from './Products';
import newProduct from './newProduct';

class ProducerPL extends React.Component {

  state = {
    products : [],
  }

  render() {
    return(
      <div className = 'ProducerPL' >
        <header>Agroapp</header>
        <hr></hr>
        <img src = 'https://img2.freepng.es/20180331/fze/kisspng-computer-icons-user-profile-avatar-user-5abf13fab81250.112035111522471930754.jpg' heigth = '200px' width = '200px' ></img>
        <h2>Nombre de usuario</h2>
        <h3>Mis productos</h3>
        <fieldset>
          <Products products = {mockproducts}></Products>
        </fieldset>
        <hr></hr>
        <Link to = '/ProducerProfile'>Regresar</Link>
        <Link to = '/newProduct'>Agregar nuevo</Link>
      </div>
    )
  }
}

export default ProducerPL;
