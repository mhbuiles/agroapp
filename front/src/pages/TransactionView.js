import React , { useEffect , useState } from 'react';
import axios from 'axios';
import {
  useParams,
  useHistory,
} from 'react-router-dom';
import '../components/ComponentsCSS/TransactionView.css';

function TransactionView() {

  let { id } = useParams();
  const history = useHistory();
  const [ state , setState ] = useState( {} );
  const [ boughtProducts , setboughtProducts ] = useState( [] );

  useEffect( () => {
    axios({
      method : 'GET',
      baseURL: process.env.REACT_APP_SERVER_URL,
      url : `/transactions/${id}`,
      headers : {
        Authorization : `Bearer ${localStorage.getItem('token')}`
      }
    })
    .then( data => {
      setState(data.data);

      let prodsb = data.data.bouProducts.join();

      axios({
        method : 'GET',
        baseURL: process.env.REACT_APP_SERVER_URL,
        url : `/products/transactprods/${prodsb}`,
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
      <h4 className = 'transactionViewTitle'>Fecha de la transacción</h4>
      <h5 className = 'transactionViewInfo'>{state.createdAt}</h5>
      <h4 className = 'transactionViewTitle'>Número de referencia del pago</h4>
      <h5 className = 'transactionViewInfo'>{state.epaycoRef}</h5>
      <h4 className = 'transactionViewTitle'>Monto</h4>
      <h5 className = 'transactionViewInfo'>COP ${state.value}</h5>
      <h4 className = 'transactionViewTitle'>Estado de la transacción</h4>
      <h5 className = 'transactionViewInfo'>{state.transactResponse}</h5>
      <h4 className = 'transactionViewTitle'>Número de factura</h4>
      <h5 className = 'transactionViewInfo'>{state.invoice}</h5>
      <h4 className = 'transactionViewTitle'>Productos comprados</h4>
      <div className = 'transactionViewProducts'>
        { boughtProducts.map( product =>
          <div className = 'transactSmallProdInfo' key = {product._id}>
            <h5 className = 'transactionViewInfo'>{product.name} ${product.price} por {product.units}</h5>
            <img className = 'transactionSmallProdThum' src = {product.image} alt = ''/>
          </div>
        )}
      </div>

      <button className = 'returnButtonTransact' onClick = { () => history.push('/ProducerTL') }>Regresar</button>
    </div>

  )
}

export default TransactionView;
