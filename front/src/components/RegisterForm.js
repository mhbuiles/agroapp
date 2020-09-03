import React from 'react'
import axios from 'axios';
import {
  Link
} from 'react-router-dom';
import './ComponentsCSS/RegisterForm.css'


class RegisterForm extends React.Component{

  state = {
      name : '',
      lname : '',
      email : '',
      phone : '',
      address : '',
      id_type : '',
      id_number : '',
      password : '',
  }

  handleChange = (event) => {
    const { value , name } = event.target;
        this.setState( { [name] : value } );
  }

  handleSubmit = async (event) => {
    event.preventDefault();

    await axios({
      method : 'POST',
      url : 'http://localhost:8000/users',
      data: this.state
    })
    .then( )
    .catch(function (error) {
      console.log(error);
    });
    this.setState({ name : '' , lname : '' , email : '' , phone : '' , address : '' , id_type : '' , id_number : '' , password : '' });
  }

  render(){
    return(
      <div className="registerContainer user-registration-form-container justify-content-center flexible-col">
        <h3>Formulario de Registro</h3>
        <form onSubmit = {this.handleSubmit}>
          <fieldset>
            <input onChange = {this.handleChange} placeholder="Nombres *" name="name" className="registerInputForm user-registration-form-input" value = {this.state.name} />
          </fieldset>

          <fieldset>
            <input onChange = {this.handleChange} placeholder="Apellidos *" name="lname" className="registerInputForm user-registration-form-input" value = {this.state.lname} />
          </fieldset>

          <fieldset>
            <input onChange = {this.handleChange} placeholder="Correo electrónico *" name="email" className="registerInputForm user-registration-form-input" value = {this.state.email} />
          </fieldset>

          <fieldset>
            <input onChange = {this.handleChange} placeholder="Contraseña *" name="password" type = 'password' className="registerInputForm user-registration-form-input" value = {this.state.password} />
          </fieldset>

          <fieldset>
            <input onChange = {this.handleChange} placeholder="Teléfono *" name="phone" className="registerInputForm user-registration-form-input" value = {this.state.phone} />
          </fieldset>

          <fieldset>
            <input onChange = {this.handleChange} placeholder="Dirección *" name="address" className="registerInputForm user-registration-form-input" value = {this.state.address} />
          </fieldset>

          <fieldset>
            <input onChange = {this.handleChange} placeholder="Tipo de Identificación" name="id_type" className="registerInputForm user-registration-form-input" value = {this.state.id_type} />
          </fieldset>

          <fieldset>
            <input onChange = {this.handleChange} placeholder="Número de Identificación" name="id_number" className="registerInputForm user-registration-form-input" value = {this.state.id_bumber} />
          </fieldset>

          <button className='registerButtonSubmit' type="submit">Registrarse</button>

          <button className='registerButtonReturn'>
            <Link to = '/'>Regresar</Link>
          </button>

        </form>
      </div>
    )
  }
}


export default RegisterForm
