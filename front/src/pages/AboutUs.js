import React from 'react';
import '../components/ComponentsCSS/About.css';
import logo from '../components/Assets/logo.jpg';

const AboutUs = () => {
  return (
    <div className = 'containerAbout'>
      <div className = 'aboutContent beigeBG'>
        <h3 className = 'aboutTitle'>
          Sobre Agroapp
        </h3>
        <p>
          Debido a la contingencia sanitaria, las pequeñas y medianas empresas
          se han visto afectadas por la imposibilidad de visualizarse frente a
          compañías con campañas de mercadeo más efectivo.
          <br/>
          <br/>
          Es por eso que es necesario un servicio que permita integrar servicios
          de producción alimento (campo agrícola) y almacenamiento-venta
          (superficies de mercado, almacenes).
         </p>
       </div>
       <div className = 'aboutLogo' >
        <img src = {logo} alt = '' />
       </div>
    </div>


    )
  }

  export default AboutUs
