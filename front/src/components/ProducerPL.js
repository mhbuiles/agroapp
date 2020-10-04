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
  const image = useSelector( state => state.authReducer.image );
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
        <hr/>
        <img className = 'prodPlProfilePic' src = {image} alt=""/>
        <h3 className = 'blue'>{name} {lname}</h3>
        <h3 className = 'prodPlTitle'>Mis productos</h3>
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
