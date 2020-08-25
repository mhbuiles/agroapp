import React from 'react';
import {
  BrowserRouter as Router,
  Link,
  Switch,
  Redirect,
  withRouter
} from 'react-router-dom';
import styled from 'styled-components'
import axios from 'axios';

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

class Authentication extends React.Component {

  state = {
    email : '',
    password : '',
  }

  handleChange = (event) => {
    const { value , name } = event.target;
    this.setState( { [name] : value } );
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({ email : '' , password : '' });
    axios({
      method : 'POST',
      url : 'http://localhost:8000/users/signin',
      data: this.state
    })
    .then( ( { data } ) => {
      console.log(data.token);
      localStorage.setItem( 'token' , data.token );
      this.props.history.push('/ProductsList');
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  render() {
    return (
      <AuthImg>
        <FlexCont>
          <div>
            <h1>Inicia sesión</h1>
          </div>
          <form onSubmit = {this.handleSubmit}>
            <fieldset>
              <InputForm onChange = {this.handleChange} type = "text" id = "email" name = "email" value = {this.state.email} placeholder="Email"></InputForm>
            </fieldset>
            <fieldset>
              <InputForm onChange = {this.handleChange} type = 'password' id = "password" name = "password" value = {this.state.password} placeholder="Contraseña"></InputForm>
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
}

export default Authentication;
