import React from 'react';
import {
  Link
} from 'react-router-dom';
import './ComponentsCSS/ProducerTL.css'


class ProducerTL extends React.Component {


  render() {
    return(
      <div className = 'prodTlContainer ProducerTL flexible-col justify-content-center align-items-center' >
        <img className='prodTlProfilePic' src = 'https://img2.freepng.es/20180331/fze/kisspng-computer-icons-user-profile-avatar-user-5abf13fab81250.112035111522471930754.jpg'></img>
        <h2>Nombre de usuario</h2>
        <h3>Mis transacciones</h3>
        <div className='prodTlTransactionsCont'>
          <ul>
            <li>Transacción 1</li>
            <li>Transacción 2</li>
            <li>Transacción 3</li>
            <li>Transacción 4</li>
            <li>Transacción 5</li>
          </ul>
        </div>
        <hr></hr>
        <button className='prodTlButtonReturn'>
          <Link to = '/UserProfile'>Regresar</Link>
        </button>
      </div>
    )
  }
}

export default ProducerTL;
