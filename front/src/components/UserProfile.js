import React from 'react';
import {
  Link
}from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  height: 100vh;
`
const ProfilePic = styled.img`
  width: 200px;  
  margin-bottom: 20px;
`
const ButtonEdit = styled.button`
  width: 130px;
  border-radius: 5px;
  border: none;
  padding: 8px 8px;
  margin: 20px 5px 20px 5px;
  background-color: #333;
  color: #fff;
`
const ButtonReturn = styled.button`
  border-radius: 5px;
  border: none;
  padding: 8px 8px;
  margin: 20px 5px 20px 5px;
  width: 130px;
`
const ButtonDelete = styled.button`
  width: 130px;
  border-radius: 5px;
  border: none;
  padding: 8px 8px;
  margin: 20px 5px 20px 5px;
  background-color: red;
  color: #fff;
`

class ProducerProfile extends React.Component {

  render() {
    return(
      <Container className = 'ProducerProfile flexible-col justify-content-center align-items-center' >        
        <hr></hr>
        <ProfilePic src = 'https://img2.freepng.es/20180331/fze/kisspng-computer-icons-user-profile-avatar-user-5abf13fab81250.112035111522471930754.jpg'></ProfilePic>
        <h3>Nombre de usuario</h3>
        <h3>Número celular</h3>
        <h3>Tipo de usuario</h3>
        <h3>Recibir pagos en</h3>
        <hr />
        <Link to = '/ProducerPL'>Mis productos</Link>
        <hr />
        <Link to = '/ProducerTL'>Mis transacciones</Link>
        <hr />
        <fieldset>
          <ButtonReturn><Link to = '/Home'>Regresar</Link></ButtonReturn>
          <ButtonEdit><Link to = '/CustomerForm'>Editar perfil</Link></ButtonEdit>
        </fieldset>
        <fieldset>
          <ButtonDelete>Eliminar cuenta</ButtonDelete>
        </fieldset>

      </Container>
    )
  }
}

export default ProducerProfile;
