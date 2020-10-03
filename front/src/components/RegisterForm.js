import React , { useReducer }from 'react'
import axios from 'axios';
import {
  Link
} from 'react-router-dom';
import './ComponentsCSS/RegisterForm.css'
import { useAlert } from 'react-alert'

function reducer(prevState, newState) {
  return {
    ...prevState,
    ...newState,
  };
}

const initialState = {
  name : '',
  lname : '',
  email : '',
  phone : '',
  address : '',
  id_type : '',
  id_number : '',
  password : '',
  city : '',
  baccount : '',
  bacctype : '',
  bank : '',
};


function RegisterForm(){

  const alertReact = useAlert();
  const [ state , setState ] = useReducer( reducer , initialState );



  handleChange = (event) => {
    const { value , name } = event.target;
    setState( { [name] : value } );
  }

  function handleChange(event) {
    const { value , name } = event.target;
    setState( { [name] : value } );
  }



  async function handleSubmit(event) {
    event.preventDefault();

    await axios({
      method : 'POST',
      url : 'http://localhost:8000/users',
      data: state
    })
    .then( () => {
      setState({ name : '' , lname : '' , email : '' , phone : '' , address : '' , id_type : '' , id_number : '' , password : '' , city : '' , baccount : '' , bacctype : '' , bank : '' });
      alertReact.success("Registro exitoso!!")
    } )
    .catch(function (err) {
      const errors = err.response.data.errors;

      for( const key in errors){
        alertReact.error(`${errors[key].message}`)
      }
    });

  }

    const { name , lname , email , phone , address , id_type , id_number , password , city , baccount , bacctype , bank } = state;

    return(
      <div className="registerContainer user-registration-form-container justify-content-center flexible-col">
        <h4>Formulario de Registro</h4>
        <form onSubmit = {handleSubmit}>
          <fieldset>
            <input onChange = {handleChange} placeholder="Nombres *" name="name" className="registerInputForm user-registration-form-input" value = {name} />
          </fieldset>

          <fieldset>
            <input onChange = {handleChange} placeholder="Apellidos *" name="lname" className="registerInputForm user-registration-form-input" value = {lname} />
          </fieldset>

          <fieldset>
            <input onChange = {handleChange} placeholder="Correo electrónico *" name="email" className="registerInputForm user-registration-form-input" value = {email} />
          </fieldset>

          <fieldset>
            <input onChange = {handleChange} placeholder="Contraseña *" name="password" type = 'password' className="registerInputForm user-registration-form-input" value = {password} />
          </fieldset>

          <fieldset>
            <input onChange = {handleChange} placeholder="Teléfono *" name="phone" className="registerInputForm user-registration-form-input" value = {phone} />
          </fieldset>

          <fieldset>
            <input onChange = {handleChange} placeholder="Dirección *" name="address" className="registerInputForm user-registration-form-input" value = {address} />
          </fieldset>

          <fieldset>
            <input onChange = {handleChange} placeholder="Ciudad *" name="city" className="registerInputForm user-registration-form-input" value = {city} />
          </fieldset>

          <fieldset>
            <input onChange = {handleChange} placeholder="Tipo de Identificación" name="id_type" className="registerInputForm user-registration-form-input" value = {id_type} />
          </fieldset>

          <fieldset>
            <input onChange = {handleChange} placeholder="Número de Identificación" name="id_number" className="registerInputForm user-registration-form-input" value = {id_number} />
          </fieldset>

          <fieldset>
            <input onChange = {handleChange} placeholder="Número de cuenta para pagos" name="baccount" className="registerInputForm user-registration-form-input" value = {baccount} />
          </fieldset>

          <fieldset>
            <input onChange = {handleChange} placeholder="Tipo de cuenta" name="bacctype" className="registerInputForm user-registration-form-input" value = {bacctype} />
          </fieldset>

          <fieldset>
            <input onChange = {handleChange} placeholder="Nombre entidad financiera" name="bank" className="registerInputForm user-registration-form-input" value = {bank} />
          </fieldset>

          <button className='registerButtonSubmit' type="submit">Registrarse</button>

          <button className='registerButtonReturn'>
            <Link to = '/'>Regresar</Link>
          </button>

          {/* <Alert variant='danger'>
            This is a danger alert—check it out!
          </Alert> */}

        </form>
      </div>
    )

}


export default RegisterForm
