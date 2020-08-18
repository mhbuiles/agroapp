import React from 'react';
import styled from 'styled-components';
import {
  Link
} from 'react-router-dom';
import {mockproducts} from './mock';
import Products from './Products';

const Container = styled.div`
  height: 100vh;
`
const ProfilePic = styled.img`
  width: 200px;  
  margin-bottom: 20px;
`
const ButtonEdit = styled.button`
  width: 130px;
  border-radius: 5px;
  border: none;
  padding: 8px 8px;
  margin: 15px 5px 15px 5px;
  background-color: #333;
  color: #fff;
`
const ButtonReturn = styled.button`
  border-radius: 5px;
  border: none;
  padding: 8px 8px;
  margin: 15px 5px 15px 5px;
  width: 130px;
`
const ProductsCont = styled.div`
  height: 130px;
  overflow: hidden;
  overflow-y: scroll;
  border: 1px solid #000;
  padding: 10px;
  width: 70%;
  margin: 15px 0;
  box-sizing: border-box;
`

class ProducerPL extends React.Component {

  state = {
    products : [],
  }

  render() {
    return(
      <Container className = 'ProducerPL flexible-col justify-content-center align-items-center' >       
        <ProfilePic src = 'https://img2.freepng.es/20180331/fze/kisspng-computer-icons-user-profile-avatar-user-5abf13fab81250.112035111522471930754.jpg'></ProfilePic>
        <h2>Nombre de usuario</h2>
        <h3>Mis productos</h3>
        <ProductsCont>
          <Products products = {mockproducts} ></Products>
        </ProductsCont>
        <hr></hr>
        <ButtonReturn><Link to = '/UserProfile'>Regresar</Link></ButtonReturn>
        <ButtonEdit><Link to = '/NewProduct'>Agregar nuevo</Link></ButtonEdit>
      </Container>
    )
  }
}

export default ProducerPL;
