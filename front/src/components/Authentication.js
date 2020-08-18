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
`



class Authentication extends React.Component {

  state = {
    username : '',
    password : '',
  }

  verifyCredentials = (credentials) => {
    this.props.users.map( user => {
      if ( (user.username === credentials.username) && (user.password === credentials.password) ) {
        return true;
      }
        return false;
    })
  }

  handleChange = (event) => {
    const { value , name } = event.target;
        this.setState( { [name] : value } );
      }


  handleSubmit = (event) => {
    event.preventDefault();
    this.verifyCredentials(this.state);
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
          <button>
            <Link to = '/ProductList'>Ingresar</Link>
          </button>
          </form>
    )
  }
}

export default Authentication;
