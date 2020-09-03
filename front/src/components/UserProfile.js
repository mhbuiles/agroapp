import React from 'react';
import {
  Link,
}from 'react-router-dom';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

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

function ProducerProfile() {

  const name = useSelector( state => state.authReducer.name );
  const lname = useSelector( state => state.authReducer.lname );
  const phone = useSelector( state => state.authReducer.phone );
  const email = useSelector( state => state.authReducer.email );

    return(
      <Container className = 'ProducerProfile flexible-col justify-content-center align-items-center' >
        <hr></hr>
        <ProfilePic src = 'https://img2.freepng.es/20180331/fze/kisspng-computer-icons-user-profile-avatar-user-5abf13fab81250.112035111522471930754.jpg'></ProfilePic>
        <h3>Nombre: {name} {lname}</h3>
        <h3>Cel: {phone}</h3>
        <h3>e-mail: {email}</h3>
        <hr />
        <Link to = '/ProducerPL'>Mis productos</Link>
        <hr />
        <Link to = '/ProducerTL'>Mis transacciones</Link>
        <hr />
        <fieldset>
          <ButtonReturn><Link to = '/ProductsList'>Regresar</Link></ButtonReturn>
          <ButtonEdit><Link to = '/RegisterForm'>Editar perfil</Link></ButtonEdit>
        </fieldset>
        <fieldset>
          <ButtonDelete>Eliminar cuenta</ButtonDelete>
        </fieldset>

      </Container>
    )
}

export default ProducerProfile;
