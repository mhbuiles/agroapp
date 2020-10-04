import React from 'react'
import ProductsBuyer from '../components/ProductsBuyer'
import { Form, FormControl } from 'react-bootstrap';
import styled from 'styled-components'
import axios from 'axios';
import {Link} from 'react-router-dom';

const Container = styled.div`
    width: 300px;
    margin: 100px auto 20px auto;
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
      searchbar : '',
    }

    componentDidMount() {
      axios({
        method : 'GET',
        baseURL: process.env.REACT_APP_SERVER_URL,
        url : '/products',
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

    handleChangeSearch = (event) => {
        this.setState({searchbar: event.target.value});
    }
    dynamicSearch = () => {
      return this.state.products.filter( product => product.name.toLowerCase().includes(this.state.searchbar.toLowerCase()) || product.location.toLowerCase().includes(this.state.searchbar.toLowerCase()) )
    }

    render(){
        return(
            <div>
                <Container>
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" onChange = {this.handleChangeSearch} value = {this.state.searchbar}/>
                    </Form>
                </Container>
                <CreateProductButton />
                <ProductsBuyer products={this.dynamicSearch()}/>
            </div>
        )
    }
}

export default ProductsList
