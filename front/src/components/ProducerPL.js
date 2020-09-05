import React , { useReducer , useEffect } from 'react';
import styled from 'styled-components';
import {
  Link
} from 'react-router-dom';
import Products from './Products';
import axios from 'axios';
import { useSelector } from 'react-redux';
import './ComponentsCSS/ProducerPL.css'


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
<<<<<<< HEAD
      <Container className = 'ProducerPL flexible-col justify-content-center align-items-center' >
        <ProfilePic src = 'https://img2.freepng.es/20180331/fze/kisspng-computer-icons-user-profile-avatar-user-5abf13fab81250.112035111522471930754.jpg'></ProfilePic>
        <h2>{name} {lname}</h2>
        <h3>Mis productos</h3>
        <ProductsCont>
          <Products products = {products} ></Products>
        </ProductsCont>
=======
      <div className = 'prodPlContainer ProducerPL flexible-col justify-content-center align-items-center' >
        <img className='prodPlProfilePic' src = 'https://img2.freepng.es/20180331/fze/kisspng-computer-icons-user-profile-avatar-user-5abf13fab81250.112035111522471930754.jpg'></img>
        <h2>Nombre de usuario</h2>
        <h3>Mis productos</h3>
        <div className='prodPlProductsCont'>
          <Products products = {mockproducts} ></Products>
        </div>
>>>>>>> 01030bf9d4f25d0f7e2d4083ebcbb2b7863f7d13
        <hr></hr>
        <button className='prodPlButtonReturn'><Link to = '/UserProfile'>Regresar</Link></button>
        <button className='prodPlButtonEdit'><Link to = '/NewProduct'>Agregar nuevo</Link></button>
      </div>
    )
}

export default ProducerPL;
