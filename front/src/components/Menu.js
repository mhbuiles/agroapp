import React from 'react';
import Button from 'react-bootstrap/Button';
import { Navbar, Nav, NavDropdown, Form, FormControl } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import { connect } from 'react-redux';
import { logout } from '../store/authreducer';
import { useHistory } from 'react-router-dom';

const HeadMenu = styled.div`
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 100;
`

function Menu( props , { authLogout } ){

  const history = useHistory();

  const handleLogout = (event) => {
    event.preventDefault();
    props.authLogout();
    localStorage.removeItem('token');
    history.push('/');
  }

    return(
        <HeadMenu>
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home">Agroapp Menu</Navbar.Brand>
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
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </HeadMenu>
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
