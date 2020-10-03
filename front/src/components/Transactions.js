import React from 'react';
import {
  Link,
} from 'react-router-dom';

function Transactions( transacts ) {

  return(
    <div>
      {transacts.transacts.map( transaction =>
        <Link to={`/ProducerTL/Transactions/${transaction._id}`} key = {transaction._id}><p>Fecha: {transaction.createdAt.slice( 0 , 10 )} Valor: ${transaction.value}</p></Link>
      )}
    </div>
  )
}

export default Transactions;
