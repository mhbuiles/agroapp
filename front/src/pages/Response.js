import React , { useEffect , useState } from 'react';
import axios from 'axios';
import '../components/ComponentsCSS/Response.css';

function Response( { location } ) {

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
    const { ref_payco } = queryString( location.search )

    axios({
      method : 'GET',
      url : `https://api.secure.payco.co/validation/v1/reference/${ref_payco}`
    })
      .then( ( { data } ) => {
        setState(data.data)
      })
  } , [location] )

  return(
    <div className = 'responsePage'>
      <h2>Resumen de su pago</h2>
      <p>Estado de la transacción: ${state.x_amount}</p>
      <p>Código de aprobación: {state.x_approval_code}</p>
      <p>Valor de la transacción: {state.x_response}</p>
      <p>Nombre del comercio: {state.x_business}</p>
      <p>Información adicional: {state.x_extra1}</p>
    </div>
  )
}

export default Response;
