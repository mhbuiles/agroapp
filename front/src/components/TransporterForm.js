import React from 'react'

class TransporterForm extends React.Component{

  render(){
    return(
      <div className="user-registration-form-container">
      <h3>Formulario de Registro Usuario Transportador</h3>
      <form>
        <fieldset>
          <input placeholder="Nombres *" name="fname" className="user-registration-form-input" />
        </fieldset>

        <fieldset>
          <input placeholder="Apellidos *" name="lname" className="user-registration-form-input" />
        </fieldset>

        <fieldset>
          <input placeholder="Correo electrónico *" name="email" className="user-registration-form-input" />
        </fieldset>

        <fieldset>
          <input placeholder="Teléfono *" name="phone-number" className="user-registration-form-input" />
        </fieldset>

        <fieldset>
          <input placeholder="Dirección *" name="address" className="user-registration-form-input" />
        </fieldset>

        <fieldset>
          <input placeholder="Tipo de Identificación" name="id-type" className="user-registration-form-input" />
        </fieldset>

        <fieldset>
          <input placeholder="Número de Identificación" name="id-number" className="user-registration-form-input" />
        </fieldset>

        <fieldset>
          <input placeholder="Marca del Vehículo" name="vehicle_brand" className="user-registration-form-input" />
        </fieldset>

        <fieldset>
          <input placeholder="Placas del Vehículo" name="vehicle_plates" className="user-registration-form-input" />
        </fieldset>

        <fieldset>
          <input placeholder="Tamaño del vehículo" name="vehicle_size" className="user-registration-form-input" />
        </fieldset>

        <fieldset>
          <input placeholder="SOAT vehículo" name="vehicle_soat" className="user-registration-form-input" />
        </fieldset>

        <fieldset>
          <input placeholder="TECNOMECANICA vehículo" name="vehicle_tecnomehcanic" className="user-registration-form-input" />
        </fieldset>

        <button type="submit">Registrarse</button>
        
      </form>
      </div>
    )
  }
}


export default TransporterForm