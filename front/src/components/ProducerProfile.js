import React from 'react';
import styled from 'styled-components';
import {
  Link
}from 'react-router-dom';

class ProducerProfile extends React.Component {



  render() {
    return(
      <div className = 'ProducerProfile' >
        <header>Agroapp</header>
        <hr></hr>
        <img src = 'https://img2.freepng.es/20180331/fze/kisspng-computer-icons-user-profile-avatar-user-5abf13fab81250.112035111522471930754.jpg' heigth = '200px' width = '200px' ></img>
        <h3>Nombre de usuario</h3>
        <h3>Número celular</h3>
        <h3>Tipo de usuario</h3>
        <h3>Recibir pagos en</h3>
        <Link to = '/ProducerPL'>Mis productos</Link>
        <hr />
        <Link to = '/ProducerTL'>Mis transacciones</Link>
        <hr />
        <fieldset>
          <Link to = '/Home'>Regresar</Link>
          <Link to = '/CustomerForm'>Editar perfil</Link>
        </fieldset>
        <fieldset>
          <button>Eliminar cuenta</button>
        </fieldset>

      </div>
    )
  }
}

export default ProducerProfile;
