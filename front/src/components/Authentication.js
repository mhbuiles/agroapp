import React from 'react';
import {
  BrowserRouter as Router,
  Link,
  Switch,
  Redirect
} from 'react-router-dom';
import styled from 'styled-components'

const InputForm = styled.input`
  text-align: center;
  margin: 10px auto;
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





class Authentication extends React.Component {

  state = {
    username : '',
    password : '',
  }


  handleChange = (event) => {
    const { value , name } = event.target;
    this.setState( { [name] : value } );
      }


  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({ username : '' , password : '' });
  }

  render() {
    return (
        <form onSubmit = {this.handleSubmit}>
          <fieldset>
            <InputForm onChange = {this.handleChange} type = "text" id = "username" name = "username" value = {this.state.username} placeholder="Email o Teléfono"></InputForm>
          </fieldset>
          <fieldset>
            <InputForm onChange = {this.handleChange} type = 'password' id = "password" name = "password" value = {this.state.password} placeholder="Contraseña"></InputForm>
          </fieldset>
          <ButtonSubmit>
            <Link to = {this.state.login ? '/ProductList' : '/test'}>Ingresar</Link>
          </ButtonSubmit>
          </form>
    )
  }
}

export default Authentication;
