import React , { useEffect , useState } from 'react';
import axios from 'axios';
import {
  useParams
} from 'react-router-dom';
import '../components/ComponentsCSS/TransactionView.css';

function TransactionView() {

  let { id } = useParams();
  const [ state , setState ] = useState( {} );
  const [ boughtProducts , setboughtProducts ] = useState( [] );

  useEffect( () => {
    axios({
      method : 'GET',
      url : `http://localhost:8000/transactions/${id}`,
      headers : {
        Authorization : `Bearer ${localStorage.getItem('token')}`
      }
    })
    .then( data => {
      setState(data.data);

      let prodsb = data.data.bouProducts.join();

      axios({
        method : 'GET',
        url : `http://localhost:8000/products/transactprods/${prodsb}`,
        headers : {
          Authorization : `Bearer ${localStorage.getItem('token')}`
        }
      })
      .then( data => {
        setboughtProducts( data.data );
      })
    })
  } , [id] );

  return(
    <div className = 'transactionView'>
      <p>Fecha de la transacción: {state.createdAt}</p>
      <p>Número de referencia del pago: {state.epaycoRef}</p>
      <p>Monto: COP${state.value}</p>
      <p>Estado de la transacción: {state.transactResponse}</p>
      <p>Número de factura: {state.invoice}</p>
      { boughtProducts.map( product =>
        <div className = 'transactSmallProdInfo' key = {product._id}>
          <p>{product.name} ${product.price} por {product.units}</p>
          <img className = 'transactionSmallProdThum' src = {product.image} alt = ''/>
        </div>
      )}
    </div>

  )
}

export default TransactionView;
