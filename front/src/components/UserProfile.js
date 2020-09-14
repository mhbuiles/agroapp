import React, { useState } from 'react';
import {
  Link,
  useHistory,
}from 'react-router-dom';
import { useDispatch , useSelector } from 'react-redux';
import './ComponentsCSS/UserProfile.css';
import axios from 'axios';


function ProducerProfile() {
  const [editMode, setEditMode] = useState(false);
  const history = useHistory();


  const name = useSelector(state => state.authReducer.name);
  const lname = useSelector(state => state.authReducer.lname);
  const phone = useSelector(state => state.authReducer.phone);
  const email = useSelector(state => state.authReducer.email);

  const handleEditMode = () => {
    setEditMode(!editMode)
  };

  function deleteUser() {
      axios({
        method : 'DELETE',
        url : `http://localhost:8000/users`,
        headers : {
          Authorization : `Bearer ${localStorage.getItem('token')}`
        }
      })
      .catch( function (error) {
        console.log(error);
      })
      history.push('/');
    }

  return (
    <div className='profileContainer ProducerProfile flexible-col justify-content-center align-items-center' >
      <hr></hr>
      <img className='profilePic' src='https://img2.freepng.es/20180331/fze/kisspng-computer-icons-user-profile-avatar-user-5abf13fab81250.112035111522471930754.jpg'></img>
      {editMode ? <input placeholder="Nombre"/> : <h3>Nombre: {name} {lname}</h3>}
      {editMode ? <input placeholder="Cel" /> : <h3>Cel: {phone}</h3>}
      {editMode ? <input placeholder="e-mail" /> : <h3>e-mail: {email}</h3>}
      <hr />
      <Link to='/ProducerPL'>Mis productos</Link>
      <hr />
      <Link to='/ProducerTL'>Mis transacciones</Link>
      <hr />
      <fieldset>
        <button className='profileButtonReturn'><Link to='/ProductsList'>Regresar</Link></button>
        {editMode ? <button className=''>Guardar Datos</button> : <button onClick={handleEditMode} className='profileButtonEdit'>Editar perfil</button>}
      </fieldset>
      <fieldset>
        <button onClick = {deleteUser} className='profileButtonDelete'>Eliminar cuenta</button>
      </fieldset>
    </div>
  )
}

export default ProducerProfile;
