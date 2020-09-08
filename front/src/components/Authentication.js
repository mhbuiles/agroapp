import React , { useReducer } from 'react';
import {
  Link,
  useHistory,
} from 'react-router-dom';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { login } from '../store/authreducer';
import { authReducer} from '../store/authreducer';
import './ComponentsCSS/Authentication.css'


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
  const [ state , setState ] = useReducer( reducer , initialState );

  function handleChange(event) {
    const { value , name } = event.target;
    setState( { [name] : value } );
  }

  function handleSubmit(event) {
    event.preventDefault();

    setState({ email : '' , password : '' });
    axios({
      method : 'POST',
      url : 'http://localhost:8000/users/signin',
      data: state
    })
    .then( ( { data } ) => {
      localStorage.setItem( 'token' , data.token );
      history.push('/ProductsList');
      dispatch(login( data.user ));
    })
    .catch(function (error) {
      console.log(error);
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
