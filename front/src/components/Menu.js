import React from 'react';
import Button from 'react-bootstrap/Button';
import { Navbar, Nav, NavDropdown, Form, FormControl } from 'react-bootstrap';
import styled from 'styled-components'

const HeadMenu = styled.div`
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 100;
`

function Menu(){

    return(
        <HeadMenu>            
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home">Agroapp Menu</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">Link</Nav.Link>
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

export default Menu