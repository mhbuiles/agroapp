import React, { useReducer, useEffect } from 'react'
import axios from 'axios';
import {
  Link,
  useParams
} from 'react-router-dom'
import '../components/ComponentsCSS/ProductView.css'

function reducer(prevState, newState) {
    return {
      ...prevState,
      ...newState,
    };
  }

const initialState = {
    product: {},
};

function ProductView() {
    const [ state , setState ] = useReducer( reducer , initialState );
    let { id } = useParams();

    useEffect(() => {
        axios({
            method : 'GET',
            url : `http://localhost:8000/products/${id}`
          })
          .then(( data ) => {
                setState( { product : data.data } )
          })
          .catch( function (error) {
            console.log(error);
          })
    }, [ id ])


  return(
    <div className='prodViewContainer beigeBG'>
      <h2 className='prodViewHeader'>Detalles de Producto</h2>

      <div>
        <div className='prodViewSmallCont'>
            <h3 className='prodViewTitle'>Producto</h3>
            <p className='prodViewInfo'>{state.product.name}</p>
            <img className='prodViewImage' src={state.product.image}></img>
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
          <button className='prodViewAdd'>Agregar al carrito</button>
        </fieldset>

      </div>

    </div>
  )
}

export default ProductView;
