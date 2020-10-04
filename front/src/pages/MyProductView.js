import React, { useReducer , useEffect } from 'react';
import axios from 'axios';
import {
  Link,
  useParams,
  useHistory,
} from 'react-router-dom';
import '../components/ComponentsCSS/MyProductView.css';
import { useDispatch } from 'react-redux';
import { deleteProdPl } from '../store/authreducer';

function reducer( prevState , newState ) {
    return {
      ...prevState,
      ...newState,
    };
  }

const initialState = {
    product: {},
};

function MyProductView() {

  const dispatch = useDispatch();
  const history = useHistory();
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

  function deleteProduct( product ) {
    axios({
      method : 'DELETE',
      url : `http://localhost:8000/products/${id}`,
      headers : {
        Authorization : `Bearer ${localStorage.getItem('token')}`
      }
    })
    .then(( data ) => {
          history.push('/ProducerPL');
    })
    .catch( function (error) {
      console.log(error);
    })
    dispatch( deleteProdPl( product ) );
  }

  return(
    <div className='myProdViewContainer'>
      <h2 className='myProdViewHeader'>Detalles de Producto</h2>
      <div>
        <div className='myProdViewSmallCont'>
            <h3 className='myProdViewTitle'>Producto</h3>
            <p className='myProdViewInfo'>{state.product.name}</p>
            <img className='myProdViewImage' src={state.product.image} alt = ''></img>
        </div>
        <div className='myProdViewSmallCont'>
            <h3 className='myProdViewTitle'>Precio</h3>
            <p className='myProdViewInfo'>{state.product.price} {'Pesos'}</p>
            <h3 className='myProdViewTitle'>Ubicación</h3>
            <p className='myProdViewInfo'>{state.product.location}</p>
            <h3 className='myProdViewTitle'>Descripción</h3>
            <p className='myProdViewDesc'>{state.product.description}</p>
        </div>
        <fieldset>
          <button className='myProductViewButtonReturn'><Link to = '/ProducerPL'>Regresar</Link></button>
          <button onClick = { () => deleteProduct( state.product ) } className='myProdViewDelete'>Eliminar producto</button>
        </fieldset>
      </div>
    </div>
  )
}

export default MyProductView;
