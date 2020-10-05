import React, { useReducer , useEffect } from 'react';
import axios from 'axios';
import {
  Link,
  useParams
} from 'react-router-dom';
import '../components/ComponentsCSS/ProductView.css';
import { useDispatch } from 'react-redux';
import { add } from '../store/cartReducer';
import { useAlert } from 'react-alert';

function reducer( prevState , newState ) {
    return {
      ...prevState,
      ...newState,
    };
  }

const initialState = {
    product: {},
};

function ProductView() {

    const alert = useAlert();
    const dispatch = useDispatch();
    const [ state , setState ] = useReducer( reducer , initialState );
    let { id } = useParams();

    useEffect(() => {
        axios({
            method : 'GET',
            baseURL: process.env.REACT_APP_SERVER_URL,
            url : `/products/${id}`,
            headers : {
              Authorization : `Bearer ${localStorage.getItem('token')}`
            }
          })
          .then(( data ) => {
                setState( { product : data.data } )
          })
          .catch( function (error) {
            console.log(error);
          })
    }, [ id ])

  function addToCart() {
    dispatch(add(state.product));
    alert.success('Producto agregado!');
  }

  return(
    <div className='prodViewContainer'>
      <h2 className='prodViewHeader'>Detalles de Producto</h2>
      <h3 className='prodViewTitle'>Producto</h3>
      <div>
        <div className='prodViewSmallCont whiteBG prodViewImageCont'>

            <p className='prodViewInfo'>{state.product.name}</p>
            <img className='prodViewImage' src={state.product.image} alt = ''></img>
        </div>
        <div className='prodViewSmallCont'>
            <h3 className='prodViewTitle'>Precio</h3>
            <p className='prodViewInfo'>{state.product.price} {'Pesos'}</p>
            <h3 className='prodViewTitle'>Ubicación</h3>
            <p className='prodViewInfo'>{state.product.location}</p>
            <h3 className='prodViewTitle'>Descripción</h3>
            <p className='prodViewDesc'>{state.product.description}</p>
        </div>

        <fieldset>
          <button className='prodViewReturn'><Link to = '/ProductsList'>Regresar</Link></button>
          <button onClick = {addToCart} className='prodViewAdd'>Agregar al carrito</button>
          <button className='prodViewCart'><Link to = '/Cart'>Ir al carrito de compras</Link></button>
        </fieldset>

      </div>

    </div>
  )
}

export default ProductView;
