import React from 'react'
import styled from 'styled-components'

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

class ProductorForm extends React.Component{

  render(){
    return(
      <Container className="user-registration-form-container justify-content-center flexible-col">
        <h3>Formulario de Registro</h3>
        <form>
          <fieldset>
            <InputForm placeholder="Nombres *" name="fname" className="user-registration-form-input" />
          </fieldset>

          <fieldset>
            <InputForm placeholder="Apellidos *" name="lname" className="user-registration-form-input" />
          </fieldset>

          <fieldset>
            <InputForm placeholder="Correo electrónico *" name="email" className="user-registration-form-input" />
          </fieldset>

          <fieldset>
            <InputForm placeholder="Teléfono *" name="phone-number" className="user-registration-form-input" />
          </fieldset>

          <fieldset>
            <InputForm placeholder="Dirección *" name="address" className="user-registration-form-input" />
          </fieldset>

          <fieldset>
            <InputForm placeholder="Tipo de Identificación" name="id-type" className="user-registration-form-input" />
          </fieldset>

          <fieldset>
            <InputForm placeholder="Número de Identificación" name="id-number" className="user-registration-form-input" />
          </fieldset>

          <ButtonSubmit type="submit">Registrarse</ButtonSubmit>

        </form>
      </Container>
    )
  }
}


export default ProductorForm
