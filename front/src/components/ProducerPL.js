import React from 'react';
import styled from 'styled-components';
import {
  Link
} from 'react-router-dom';
import {mockproducts} from './mock';
import Products from './Products';
import './ComponentsCSS/ProducerPL.css'



class ProducerPL extends React.Component {

  state = {
    products : [],
  }



  render() {
    return(
      <div className = 'prodPlContainer ProducerPL flexible-col justify-content-center align-items-center' >
        <img className='prodPlProfilePic' src = 'https://img2.freepng.es/20180331/fze/kisspng-computer-icons-user-profile-avatar-user-5abf13fab81250.112035111522471930754.jpg'></img>
        <h2>Nombre de usuario</h2>
        <h3>Mis productos</h3>
        <div className='prodPlProductsCont'>
          <Products products = {mockproducts} ></Products>
        </div>
        <hr></hr>
        <button className='prodPlButtonReturn'><Link to = '/UserProfile'>Regresar</Link></button>
        <button className='prodPlButtonEdit'><Link to = '/NewProduct'>Agregar nuevo</Link></button>
      </div>
    )
  }
}

export default ProducerPL;
