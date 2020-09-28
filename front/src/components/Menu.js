import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../store/authreducer';
import { useHistory } from 'react-router-dom';
import './ComponentsCSS/Menu.css';
import logo from './Assets/logo.jpg';
import logoErgoz from './Assets/logoErgoz.jpg'


function Menu( props , { authLogout } ){

  const history = useHistory();

  const handleLogout = (event) => {
    event.preventDefault();
    props.authLogout();
    localStorage.removeItem('token');
    history.push('/');
  }
    return(
        <div className='headMenu'>
            <Navbar className='whiteBG' expand="lg">
              <Navbar.Brand href="/"><img className="brand-logo" src={logo} alt="Agroapp Logo" /></Navbar.Brand>
                <h2 className = 'menuTitle'>AgroApp</h2>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Link to = '/' className="nav-link">Página de inicio</Link>
                        <Link to = '/UserProfile' className="nav-link">Mi perfil</Link>
                        <Link to = '/ProductsList' className="nav-link">Productos</Link>
                        <Link to = '/Cart' className = 'nav-link'>Carrito de compras</Link>
                        <Link to = '/about' className="nav-link">About us</Link>
                        { props.authMenu ? <span onClick = {handleLogout} className="nav-link">Salir</span> : <Link to = '/Authentication' className="nav-link">Ingresar</Link>}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )

}

function mapStateToProps(state) {
  return {
    authMenu : state.authReducer.authenticated,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    authLogout : () => dispatch(logout())
  }
}

export default connect( mapStateToProps , mapDispatchToProps )(Menu);
