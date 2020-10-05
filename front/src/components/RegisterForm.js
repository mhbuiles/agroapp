import React , { useReducer , useState }from 'react'
import axios from 'axios';
import {
  Link
} from 'react-router-dom';
import './ComponentsCSS/RegisterForm.css'
import { useAlert } from 'react-alert'

function RegisterForm(){

  const alertReact = useAlert();
  const [ name , setName ] = useState( '' );
  const [ lname , setLname ] = useState( '' );
  const [ email , setEmail ] = useState( '' );
  const [ phone , setPhone ] = useState( '' );
  const [ address , setAddress ] = useState( '' );
  const [ id_type , setId_type ] = useState( '' );
  const [ id_number , setId_number ] = useState( '' );
  const [ password , setPassword ] = useState( '' );
  const [ city , setCity ] = useState( '' );
  const [ baccount , setBaccount ] = useState( '' );
  const [ bacctype , setBacctype ] = useState( '' );
  const [ bank , setBank ] = useState( '' );
  const [ file , setFile ] = useState(null);
  const [ imageread , setImageread ] = useState(null);

  function handleFile ( event ) {
    setFile(event.target.files[0]);
    readFile(event.target.files[0]);
  }

  function readFile( file ) {
    const reader = new FileReader();
    reader.onload = event => setImageread(event.target.result);
    reader.readAsDataURL( file );
  }

  async function handleSubmit(event) {
    event.preventDefault();

    const data2 = new FormData();
    data2.append( 'name' , name );
    data2.append( 'lname' , lname );
    data2.append( 'email' , email );
    data2.append( 'phone' , phone );
    data2.append( 'address' , address );
    data2.append( 'id_type' , id_type );
    data2.append( 'id_number' , id_number );
    data2.append( 'password' , password );
    data2.append( 'city' , city );
    data2.append( 'baccount' , baccount );
    data2.append( 'bacctype' , bacctype );
    data2.append( 'bank' , bank );
    if( file ) {
      data2.append( 'file' , file , file.name );
    }

    await axios({
      method : 'POST',
      baseURL: process.env.REACT_APP_SERVER_URL,
      url : '/users',
      data: data2
    })
    .then( () => {
      setName('');
      setLname('');
      setEmail('');
      setPhone('');
      setAddress('');
      setId_type('');
      setId_number('');
      setPassword('');
      setCity('');
      setBaccount('');
      setBacctype('');
      setBank('');
      alertReact.success("Registro exitoso!!")
    } )
    .catch(function (err) {
      const errors = err.response.data.errors;

      for( const key in errors){
        alertReact.error(`${errors[key].message}`)
      }
    });

  }

    return(
      <div className="registerContainer user-registration-form-container justify-content-center flexible-col">
        <h4>Formulario de Registro</h4>
        <form onSubmit = {handleSubmit}>
          <fieldset>
            <input onChange = { (event) => setName(event.target.value) } placeholder="Nombres" name="name" className="registerInputForm user-registration-form-input" value = {name} />
          </fieldset>

          <fieldset>
            <input onChange = { (event) => setLname(event.target.value) } placeholder="Apellidos" name="lname" className="registerInputForm user-registration-form-input" value = {lname} />
          </fieldset>

          <fieldset>
            <label className="newProdLabel" htmlFor = 'file' >Agregar una foto de perfil</label>
            <input onChange = {handleFile} type = 'file' id = "file" name = "file" accept = 'image/*' className="registerInputForm user-registration-form-input"></input>
            { imageread && ( <img src = {imageread} alt = '' className = 'fileReadImage'/>)}
          </fieldset>

          <fieldset>
            <input onChange = { (event) => setEmail(event.target.value) } placeholder="Correo electrónico" name="email" className="registerInputForm user-registration-form-input" value = {email} />
          </fieldset>

          <fieldset>
            <input onChange = { (event) => setPassword(event.target.value) } placeholder="Contraseña" name="password" type = 'password' className="registerInputForm user-registration-form-input" value = {password} />
          </fieldset>

          <fieldset>
            <input onChange = { (event) => setPhone(event.target.value) } placeholder="Teléfono" name="phone" className="registerInputForm user-registration-form-input" value = {phone} />
          </fieldset>

          <fieldset>
            <input onChange = { (event) => setAddress(event.target.value) } placeholder="Dirección" name="address" className="registerInputForm user-registration-form-input" value = {address} />
          </fieldset>

          <fieldset>
            <input onChange = { (event) => setCity(event.target.value) } placeholder="Ciudad" name="city" className="registerInputForm user-registration-form-input" value = {city} />
          </fieldset>

          <fieldset>
            <select onChange = { (event) => setId_type(event.target.value) } name = 'id_type' value = {id_type} className="blue selectPadding">
              <option value = '' disabled selected hidden>Elija el tipo de identificación</option>
              <option value = 'CC'>CC</option>
              <option value = 'CE'>CE</option>
              <option value = 'PA'>PA</option>
            </select>
          </fieldset>

          <fieldset>
            <input onChange = { (event) => setId_number(event.target.value) } placeholder="Número de Identificación" name="id_number" className="registerInputForm user-registration-form-input" value = {id_number} />
          </fieldset>

          <fieldset>
            <input onChange = { (event) => setBaccount(event.target.value) } placeholder="Número de cuenta para pagos" name="baccount" className="registerInputForm user-registration-form-input" value = {baccount} />
          </fieldset>

          <fieldset>
            <select onChange = { (event) => setBacctype(event.target.value) } name = 'bacctype' value = {bacctype} className="blue selectPadding">
              <option value = '' disabled selected hidden>Elija el tipo de cuenta bancaria</option>
              <option value = 'Ahorros'>Ahorros</option>
              <option value = 'Corriente'>Corriente</option>
              <option value = ''>N/A</option>
            </select>
          </fieldset>

          <fieldset>
            <select onChange = { (event) => setBank(event.target.value) } name = 'bank' value = {bank} className="blue selectPadding">
              <option value = '' disabled selected hidden>Elija su entidad financiera</option>
              <option value = ''>N/A</option>
              <option value = 'Bancolombia'>Bancolombia</option>
              <option value = 'Banco de Bogotá'>Banco de Bogotá</option>
              <option value = 'Davivienda'>Davivienda</option>
              <option value = 'Nequi'>Nequi</option>
              <option value = 'Daviplata'>Daviplata</option>
              <option value = 'Banco de Occidente'>Banco de Occidente</option>
              <option value = 'Banco AVVillas'>Banco AVVillas</option>
              <option value = 'Banco Popular'>Banco Popular</option>
              <option value = 'Itaú'>Itaú</option>
              <option value = 'Colpatria'>Colpatria</option>
              <option value = 'BBVA'>BBVA</option>
              <option value = 'Banco Agrario'>Banco Agrario</option>
              <option value = 'Citibank'>Citibank</option>
              <option value = 'Banco Caja Social'>Banco Caja Social</option>
              <option value = 'Banco Falabella'>Banco Falabella</option>
              <option value = 'Banco Pichincha'>Banco Pichincha</option>
              <option value = 'Bancoomeva'>Bancoomeva</option>
            </select>
          </fieldset>

          <button className='registerButtonSubmit' type="submit">Registrarse</button>

          <button className='registerButtonReturn'>
            <Link to = '/'>Regresar</Link>
          </button>

        </form>
      </div>
    )

}


export default RegisterForm
