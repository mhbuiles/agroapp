import React , { useReducer , useEffect } from 'react';
import {
  Link,
  useHistory,
} from 'react-router-dom';
import Products from './Products';
import axios from 'axios';
import { useSelector } from 'react-redux';
import './ComponentsCSS/ProducerPL.css'


function reducer(prevState, newState) {
  return {
    ...prevState,
    ...newState,
  };
}

const initialState = {
  products : [],
};

function ProducerPL( ) {

  const history = useHistory();
  const name = useSelector( state => state.authReducer.name );
  const lname = useSelector( state => state.authReducer.lname );
  const products = useSelector( state => state.authReducer.products);
  const [ state , setState ] = useReducer( reducer , initialState );

  useEffect( () => {
    axios({
      method : 'GET',
      url : 'http://localhost:8000/products/myproducts',
      headers : {
        Authorization : `Bearer ${localStorage.getItem('token')}`
      }
    })
    .then( ( data ) => {
      setState( { products : data.data } )
    })
    .catch( () => {
      localStorage.removeItem('token');
      history.push('/Authentication');
    })
  } , [ history ] )

    return(

      <div className = 'prodPlContainer ProducerPL flexible-col justify-content-center align-items-center' >
        <img className = 'prodPlProfilePic' src = 'https://img2.freepng.es/20180331/fze/kisspng-computer-icons-user-profile-avatar-user-5abf13fab81250.112035111522471930754.jpg' alt=""/>
        <h2>{name} {lname}</h2>
        <h3>Mis productos</h3>
        <div className = 'prodPlProductsCont'>
          <Products products = {state.products} ></Products>
        </div>
        <hr></hr>
        <button className='prodPlButtonReturn'><Link to = '/UserProfile'>Regresar</Link></button>
        <button className='prodPlButtonEdit'><Link to = '/NewProduct'>Agregar nuevo</Link></button>
      </div>
    )
}

export default ProducerPL;
