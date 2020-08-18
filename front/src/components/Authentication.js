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
