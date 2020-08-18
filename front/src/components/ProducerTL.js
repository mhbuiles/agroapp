import React from 'react';
import styled from 'styled-components';
import {
  Link
} from 'react-router-dom';

class ProducerTL extends React.Component {

// const container = styled.div`
//   color : red;
// `;

  render() {
    return(
      <div className = 'ProducerTL' >
        <header>Agroapp</header>
        <hr></hr>
        <img src = 'https://img2.freepng.es/20180331/fze/kisspng-computer-icons-user-profile-avatar-user-5abf13fab81250.112035111522471930754.jpg' heigth = '200px' width = '200px' ></img>
        <h2>Nombre de usuario</h2>
        <h3>Mis transacciones</h3>
        <fieldset>
          <ul>
            <li>Transacción 1</li>
            <li>Transacción 2</li>
            <li>Transacción 3</li>
            <li>Transacción 4</li>
            <li>Transacción 5</li>
          </ul>
        </fieldset>
        <hr></hr>
        <Link to = '/ProducerProfile'>Regresar</Link>
      </div>
    )
  }
}

export default ProducerTL;
