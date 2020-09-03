import React , { useReducer } from 'react';
import {
  Link,
  useHistory,
} from 'react-router-dom';
import styled from 'styled-components'
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { login } from '../store/authreducer';

const AuthImg = styled.div`
    width: 100%;
    background-image: url("https://i.pinimg.com/564x/86/82/80/868280fd8229fcd648329bb1927fa2b9.jpg");
    height: 100vh;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
`
const FlexCont = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    justify-content: center;
    align-items: center;
    color: #fff;
`

const InputForm = styled.input`
  text-align: center;
  margin: 20px auto;
  width: 270px;
  border-radius: 5px;
  border: none;
  padding: 5px 0;
`
const ButtonSubmit = styled.button`
  border-radius: 5px;
  border: none;
  padding: 8px 8px;
  margin-top: 20px;
  width: 130px;
`
const ButtonReturn = styled.button`
  border-radius: 5px;
  border: none;
  padding: 8px 8px;
  margin-top: 20px;
  width: 130px;
`

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
      // console.log(data.user);
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  const { email , password } = state;

    return (
      <AuthImg>
        <FlexCont>
          <div>
            <h1>Inicia sesión</h1>
          </div>
          <form onSubmit = {handleSubmit}>
            <fieldset>
              <InputForm onChange = {handleChange} type = "text" id = "email" name = "email" value = {email} placeholder="Email"></InputForm>
            </fieldset>
            <fieldset>
              <InputForm onChange = {handleChange} type = 'password' id = "password" name = "password" value = {password} placeholder="Contraseña"></InputForm>
            </fieldset>
            <ButtonSubmit type = 'submit'>Ingresar</ButtonSubmit>
            </form>
            <ButtonReturn>
              <Link to = '/'>Regresar</Link>
            </ButtonReturn>
        </FlexCont>
      </AuthImg>
    )
}

export default Authentication;
