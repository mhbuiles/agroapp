import React , { useEffect , useState } from 'react';
import axios from 'axios';
import '../components/ComponentsCSS/Response.css';
import { useHistory } from 'react-router-dom';

function Response( { location } ) {

  const history = useHistory();
  const [ state , setState ] = useState( {} );

  function queryString( query ) {

    const res = {};
    query
      .replace( /\?/ , '' )
      .split( '&' )
      .forEach( q => {
        const [ key , value ] = q.split( '=' )
        res[key] = value
      })
    return res;
  }

  useEffect( () => {
    const { ref_payco } = queryString( location.search );

    axios({
      method : 'GET',
      url : `https://api.secure.payco.co/validation/v1/reference/${ref_payco}`
    })
      .then( ( { data } ) => {
        setState(data.data);
        let prods = data.data.x_extra1.split(',');

        let userTransact = {
          value : data.data.x_amount,
          bouProducts : prods,
          invoice : data.data.x_id_invoice,
          transactResponse : data.data.x_response,
          epaycoRef : data.data.x_ref_payco,
        };

        axios({
          method : 'POST',
          url : 'http://localhost:8000/transactions',
          data: userTransact,
          headers : {
            Authorization : `Bearer ${localStorage.getItem('token')}`,
          }
        });
      })
      .catch( function (error) {
        console.log(error);
      });
  } , [location] );

  return(
    <div className = 'responsePage'>
      <h2>Resumen de su pago</h2>
      <p>Estado de la transacción: {state.x_response}</p>
      <p>Número de referencia: {state.x_ref_payco}</p>
      <p>Fecha y hora: {state.x_transaction_date}</p>
      <p>Código de aprobación: {state.x_approval_code}</p>
      <p>Valor de la transacción: ${state.x_amount} {state.x_currency_code}</p>
      <p>Factura No.: {state.x_id_invoice}</p>
      <p>Nombre del comercio: {state.x_description}</p>
      <button className = 'responseButton' onClick = { ( )=> history.push('/ProductsList') }>Ir al inicio</button>
    </div>
  )
}

export default Response;
