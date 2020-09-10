import React from 'react'
import ProductsBuyer from '../components/ProductsBuyer'
import { Nav, NavDropdown, Form, FormControl } from 'react-bootstrap';
import styled from 'styled-components'
import axios from 'axios';
import {Link} from 'react-router-dom';

const Container = styled.div`
    width: 300px;
    margin: 70px auto 20px auto;
`
 const AddButton = styled.button`
   width: 180px;
   border-radius: 5px;
   border: none;
   padding: 8px 8px;
   margin: 20px 5px 10px 5px;
   background-color: #659BDB;
   color: #fff;
 `

const CreateProductButton = () => {

  return(
    <AddButton><Link to = '/NewProduct'>Agregar nuevo</Link></AddButton>
  )
}


class ProductsList extends React.Component{

    state = {
      products : [],
    }

    componentDidMount() {
      axios({
        method : 'GET',
        url : 'http://localhost:8000/products',
        headers : {
          Authorization : `Bearer ${localStorage.getItem('token')}`
        }
      })
      .then( ( data ) => {
        this.setState( { products : data.data } )
      })
      .catch( () => {
        localStorage.removeItem('token');
        this.props.history.push('/Authentication');
      })
    }

    render(){
        return(
            <div>
                <Container>
                    <Nav className="mr-auto">
                        <NavDropdown title="Filtros Productos" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Filtro 1</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Filtro 2</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Filtro 3</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    </Form>
                </Container>
                <CreateProductButton />
                <ProductsBuyer products={this.state.products}/>
            </div>
        )
    }
}

export default ProductsList
