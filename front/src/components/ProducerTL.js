import React from 'react';
import styled from 'styled-components';
import {
  Link
} from 'react-router-dom';

const Container = styled.div`
  height: 100vh;
`
const ProfilePic = styled.img`
  width: 200px;  
  margin-bottom: 20px;
`
const ButtonReturn = styled.button`
  border-radius: 5px;
  border: none;
  padding: 8px 8px;
  margin: 15px 5px 15px 5px;
  width: 130px;
`
const TransactionsCont = styled.div`
  height: 130px;
  overflow: hidden;
  overflow-y: scroll;
  border: 1px solid #000;
  padding: 10px;
  width: 70%;
  margin: 15px 0;
  box-sizing: border-box;
`

class ProducerTL extends React.Component {

// const container = styled.div`
//   color : red;
// `;

  render() {
    return(
      <Container className = 'ProducerTL flexible-col justify-content-center align-items-center' >        
        <ProfilePic src = 'https://img2.freepng.es/20180331/fze/kisspng-computer-icons-user-profile-avatar-user-5abf13fab81250.112035111522471930754.jpg'></ProfilePic>
        <h2>Nombre de usuario</h2>
        <h3>Mis transacciones</h3>
        <TransactionsCont>
          <ul>
            <li>Transacción 1</li>
            <li>Transacción 2</li>
            <li>Transacción 3</li>
            <li>Transacción 4</li>
            <li>Transacción 5</li>
          </ul>
        </TransactionsCont>
        <hr></hr>
        <ButtonReturn>
          <Link to = '/UserProfile'>Regresar</Link>
        </ButtonReturn>
      </Container>
    )
  }
}

export default ProducerTL;
