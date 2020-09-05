import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import { connect } from 'react-redux';
import { logout } from '../store/authreducer';
import { useHistory } from 'react-router-dom';
import './ComponentsCSS/Menu.css'


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
              <Navbar.Brand href="/">Agroapp Logo</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Link to = '/' className="nav-link">Página de inicio</Link>
                        <Link to = '/UserProfile' className="nav-link">Mi perfil</Link>
                        <Link to = '/ProductsList' className="nav-link">Productos</Link>
                        {props.authMenu ? <a onClick = {handleLogout} className="nav-link" href = '#'>Salir</a> : <Link to = '/Authentication' className="nav-link">Ingresar</Link>}
                        <NavDropdown title="Link dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item>
                              <Link to = '/about' className="item">About us</Link> 
                            </NavDropdown.Item>
                            
                        </NavDropdown>
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
