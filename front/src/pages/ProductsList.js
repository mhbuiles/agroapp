import React from 'react'
import ProductsBuyer from '../components/ProductsBuyer'
import { ProductosComprador } from './mock.js'
import { Button, Navbar, Nav, NavDropdown, Form, FormControl } from 'react-bootstrap';
import styled from 'styled-components'
import Menu from '../components/Menu';


const Container = styled.div`
    width: 300px;
    margin: 10px auto;
`



class ProductsList extends React.Component{

    state = {}



    render(){
        return(
            <div>
                <Menu />
                <Container>
                <Nav className="mr-auto">                    
                    <NavDropdown title="Filtros Productos" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Filtro 1</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Filtro 2</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Filtro 3</NavDropdown.Item>                        
                    </NavDropdown>
                </Nav>
                </Container>   

                <Container>
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />                    
                    </Form>
                </Container>

                 <ProductsBuyer products={ProductosComprador}/>             
            </div>
        )
    }
}

export default ProductsList