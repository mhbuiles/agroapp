import React from 'react';
import {
  BrowserRouter as Router,
  Link,
  Switch,
  Redirect
} from 'react-router-dom';

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
            <label htmlFor = 'username' >Correo electrónico o número de celular </label>
            <input onChange = {this.handleChange} type = "text" id = "username" name = "username" value = {this.state.username}></input>
          </fieldset>
          <fieldset>
            <label htmlFor = 'password' >Contraseña </label>
            <input onChange = {this.handleChange} type = 'password' id = "password" name = "password" value = {this.state.password}></input>
          </fieldset>
          <button>Ingresar</button>
          </form>
    )
  }
}

export default Authentication;
