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
      <h4 className = 'responseTitle'>Estado de la transacción</h4>
      <h5 className = 'responseInfo'>{state.x_response}</h5>
      <h4 className = 'responseTitle'>Número de referencia</h4>
      <h5 className = 'responseInfo'>{state.x_ref_payco}</h5>
      <h4 className = 'responseTitle'>Fecha y hora</h4>
      <h5 className = 'responseInfo'>{state.x_transaction_date}</h5>
      <h4 className = 'responseTitle'>Código de aprobación</h4>
      <h5 className = 'responseInfo'>{state.x_approval_code}</h5>
      <h4 className = 'responseTitle'>Monto de la transacción</h4>
      <h5 className = 'responseInfo'>${state.x_amount} {state.x_currency_code}</h5>
      <h4 className = 'responseTitle'>Factura No.</h4>
      <h5 className = 'responseInfo'>{state.x_id_invoice}</h5>
      <h4 className = 'responseTitle'>Nombre del comercio</h4>
      <h5 className = 'responseInfo'>{state.x_description}</h5>
      <button className = 'responseButton' onClick = { ( ) => history.push('/ProductsList') }>Ir al inicio</button>
    </div>
  )
}

export default Response;
