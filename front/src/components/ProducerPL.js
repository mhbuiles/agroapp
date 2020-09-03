import React , { useReducer , useEffect } from 'react';
import styled from 'styled-components';
import {
  Link
} from 'react-router-dom';
import Products from './Products';
import axios from 'axios';
import { useSelector } from 'react-redux';

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

// function reducer(prevState, newState) {
//   return {
//     ...prevState,
//     ...newState,
//   };
// }
//
// const initialState = {
//   products : [],
// };

function ProducerPL( ) {

  const name = useSelector( state => state.authReducer.name );
  const lname = useSelector( state => state.authReducer.lname );
  const products = useSelector( state => state.authReducer.products );
  const userId = useSelector( state => state.authReducer.userId);
  // console.log(products);
  // const [ state , setState ] = useReducer( reducer , initialState );

  // state = {
  //   products : [],
  // }



  useEffect( () => {
    axios({
      method : 'GET',
      url : 'http://localhost:8000/products/myproducts',
      headers : {
        Authorization : `Bearer ${localStorage.getItem('token')}`
      }
    })
    .then( ( data ) => {
      this.setState( { products : data.data } )
      console.log(data.data);
    })
    .catch( () => {
      localStorage.removeItem('token');
      // props.history.push('/Authentication');
    })
  } , [] )




    return(
      <Container className = 'ProducerPL flexible-col justify-content-center align-items-center' >
        <ProfilePic src = 'https://img2.freepng.es/20180331/fze/kisspng-computer-icons-user-profile-avatar-user-5abf13fab81250.112035111522471930754.jpg'></ProfilePic>
        <h2>{name} {lname}</h2>
        <h3>Mis productos</h3>
        <ProductsCont>
          <Products products = {products} ></Products>
        </ProductsCont>
        <hr></hr>
        <ButtonReturn><Link to = '/UserProfile'>Regresar</Link></ButtonReturn>
        <ButtonEdit><Link to = '/NewProduct'>Agregar nuevo</Link></ButtonEdit>
      </Container>
    )
}

export default ProducerPL;
