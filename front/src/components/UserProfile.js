import React, { useState } from 'react';
import {
  Link,
  useHistory,
} from 'react-router-dom';
import { useSelector } from 'react-redux';
import './ComponentsCSS/UserProfile.css';
import axios from 'axios';


function ProducerProfile() {

  const [editMode, setEditMode] = useState(false);
  const history = useHistory();

  const name = useSelector(state => state.authReducer.name);
  const lname = useSelector(state => state.authReducer.lname);
  const phone = useSelector(state => state.authReducer.phone);
  const email = useSelector(state => state.authReducer.email);
  const image = useSelector(state => state.authReducer.image);

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
      <div>
        <img className='profilePicUser' src={image} alt = ''></img>
      </div>
      <div className = 'profileTitleContainer'>
        <h5 className = 'profileTitle'>Nombre</h5>
        {editMode ? <input placeholder="Nombre"/> : <h5 className = 'blue'>{name} {lname}</h5>}
        <h5 className = 'profileTitle'>Celular</h5>
        {editMode ? <input placeholder="Cel" /> : <h5 className = 'blue'>{phone}</h5>}
        <h5 className = 'profileTitle'>E-mail</h5>
        {editMode ? <input placeholder="e-mail" /> : <h5 className = 'blue'>{email}</h5>}
      </div>
      <hr />
      <Link to='/ProducerPL' className = 'profileButton'>Mis productos</Link>
      <hr />
      <Link to='/ProducerTL' className = 'profileButton'>Mis transacciones</Link>
      <hr />
      <fieldset>
        <button className='profileButtonReturn'><Link to='/ProductsList'>Regresar</Link></button>
        {editMode ? <button className='profileButtonSave'>Guardar Datos</button> : <button onClick={handleEditMode} className='profileButtonEdit'>Editar perfil</button>}
      </fieldset>
      <fieldset>
        <button onClick = {deleteUser} className='profileButtonDelete'>Eliminar cuenta</button>
      </fieldset>
    </div>
  )
}

export default ProducerProfile;
