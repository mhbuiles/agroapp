import React , { useReducer } from 'react';
import {
  Link,
  useHistory,
} from 'react-router-dom';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { login } from '../store/authreducer';
import './ComponentsCSS/Authentication.css'
import { useAlert } from 'react-alert'


function reducer(prevState, newState) {
  return {
    ...prevState,
    ...newState,
  };
}

const initialState = {
  email: '',
  password : '',
};

function Authentication( ) {

  const dispatch = useDispatch();
  const history = useHistory();
  const alertReact = useAlert();
  const [ state , setState ] = useReducer( reducer , initialState );

  function handleChange(event) {
    const { value , name } = event.target;
    setState( { [name] : value } );
  }

  function handleSubmit(event) {
    event.preventDefault();

    axios({
      method : 'POST',
      baseURL: process.env.REACT_APP_SERVER_URL,
      url : '/users/signin',
      data: state
    })
    .then( ( { data } ) => {
      localStorage.setItem( 'token' , data.token );
      dispatch(login( data.user ));
      history.push('/ProductsList');
    })
    .catch(function (err) {
        const errors = err.response.data;
        alertReact.error(`${errors.message}`)
    });
  }

  const { email , password } = state;

    return (
      <div className='authImg'>
        <div className='flexCont'>
          <div>
            <h1>Inicia sesión</h1>
          </div>
          <form onSubmit = {handleSubmit}>
            <fieldset>
              <input className='inputForm' onChange = {handleChange} type = "text" id = "email" name = "email" value = {email} placeholder="Email"></input>
            </fieldset>
            <fieldset>
              <input className='inputForm' onChange = {handleChange} type = 'password' id = "password" name = "password" value = {password} placeholder="Contraseña"></input>
            </fieldset>
            <button className='buttonSubmit' type = 'submit'>Ingresar</button>
            </form>
            <button className='buttonReturn'>
              <Link to = '/'>Regresar</Link>
            </button>
        </div>
      </div>
    )
}

export default Authentication;
