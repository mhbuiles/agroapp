import React , { useEffect , useState , useReducer } from 'react';
import {
  Link,
  useHistory
}from 'react-router-dom';
import store from '../store/store';
import { useDispatch , useSelector } from 'react-redux';
import { login } from '../store/authreducer';
import './ComponentsCSS/UserProfile.css'


function ProducerProfile() {

  const name = useSelector( state => state.authReducer.name );
  const lname = useSelector( state => state.authReducer.lname );
  const phone = useSelector( state => state.authReducer.phone );
  const email = useSelector( state => state.authReducer.email );

    return(
      <div className = 'profileContainer ProducerProfile flexible-col justify-content-center align-items-center' >
        <hr></hr>
        <img className='profilePic' src = 'https://img2.freepng.es/20180331/fze/kisspng-computer-icons-user-profile-avatar-user-5abf13fab81250.112035111522471930754.jpg'></img>
        <h3>Nombre: {name} {lname}</h3>
        <h3>Cel: {phone}</h3>
        <h3>e-mail: {email}</h3>
        <hr />
        <Link to = '/ProducerPL'>Mis productos</Link>
        <hr />
        <Link to = '/ProducerTL'>Mis transacciones</Link>
        <hr />
        <fieldset>
          <button className='profileButtonReturn'><Link to = '/Home'>Regresar</Link></button>
          <button className='profileButtonEdit'><Link to = '/CustomerForm'>Editar perfil</Link></button>
        </fieldset>
        <fieldset>
          <button className='profileButtonDelete'>Eliminar cuenta</button>
        </fieldset>
      </div>
    )
}

export default ProducerProfile;
