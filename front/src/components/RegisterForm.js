import React from 'react'
import styled from 'styled-components'
import axios from 'axios';

const InputForm = styled.input`
  text-align: center;
  margin: 10px auto;
  width: 270px;
  border-radius: 5px;
  border: none;
  padding: 5px 0;
  background-color: #e4e4e4;
`
const ButtonSubmit = styled.button`
  border-radius: 5px;
  border: none;
  padding: 8px 8px;
  margin-top: 20px;
  background-color: #333;
  color: #fff;
`
const Container = styled.div`
  height: 100vh;
`

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
    .then( (data) => {
      console.log(data);
    })
    .catch(function (error) {
      console.log(error);
    });
    this.setState({ name : '' , lname : '' , email : '' , phone : '' , address : '' , id_type : '' , id_number : '' , password : '' });
  }

  render(){
    return(
      <Container className="user-registration-form-container justify-content-center flexible-col">
        <h3>Formulario de Registro</h3>
        <form onSubmit = {this.handleSubmit}>
          <fieldset>
            <InputForm onChange = {this.handleChange} placeholder="Nombres *" name="name" className="user-registration-form-input" value = {this.state.name} />
          </fieldset>

          <fieldset>
            <InputForm onChange = {this.handleChange} placeholder="Apellidos *" name="lname" className="user-registration-form-input" value = {this.state.lname} />
          </fieldset>

          <fieldset>
            <InputForm onChange = {this.handleChange} placeholder="Correo electrónico *" name="email" className="user-registration-form-input" value = {this.state.email} />
          </fieldset>

          <fieldset>
            <InputForm onChange = {this.handleChange} placeholder="Contraseña *" name="password" type = 'password' className="user-registration-form-input" value = {this.state.password} />
          </fieldset>

          <fieldset>
            <InputForm onChange = {this.handleChange} placeholder="Teléfono *" name="phone" className="user-registration-form-input" value = {this.state.phone} />
          </fieldset>

          <fieldset>
            <InputForm onChange = {this.handleChange} placeholder="Dirección *" name="address" className="user-registration-form-input" value = {this.state.address} />
          </fieldset>

          <fieldset>
            <InputForm onChange = {this.handleChange} placeholder="Tipo de Identificación" name="id_type" className="user-registration-form-input" value = {this.state.id_type} />
          </fieldset>

          <fieldset>
            <InputForm onChange = {this.handleChange} placeholder="Número de Identificación" name="id_number" className="user-registration-form-input" value = {this.state.id_bumber} />
          </fieldset>

          <ButtonSubmit type="submit">Registrarse</ButtonSubmit>

        </form>
      </Container>
    )
  }
}


export default RegisterForm
