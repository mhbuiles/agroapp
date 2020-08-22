import React from 'react';
import {
  Link
} from 'react-router-dom';
import {mockproducts} from './mock';
import styled from 'styled-components';
import axios from 'axios';

const Container = styled.div`
  height: 100vh;
`
const ProfilePic = styled.img`
  width: 200px;
  margin-bottom: 20px;
`
const ButtonReturn = styled.button`
  border-radius: 5px;
  border: none;
  padding: 8px 8px;
  margin: 15px 5px 15px 5px;
  width: 180px;
`
const ButtonAdd = styled.button`
  width: 180px;
  border-radius: 5px;
  border: none;
  padding: 8px 8px;
  margin: 20px 5px 20px 5px;
  background-color: #333;
  color: #fff;
`

const FormField = styled.fieldset`
  margin: 15px 10%;
  border: 1px solid #000;
  width: 80%;
  padding: 10px 10px;
`

const FormInput = styled.input`
  text-align: center;
  width: 90%;
`

class NewProduct extends React.Component {

  state = {
      name : '',
      price : 0,
      location : '',
      image : '',
  }

  handleChange = (event) => {
    const { value , name , checked } = event.target;
    if ( name === "done" ) {
      this.setState( { [name] : checked } );
    }
      else {
        this.setState( { [name] : value } );
      }
  }

  handleSubmit = (event) => {
    event.preventDefault();
    // this.addProduct(this.state);
    this.setState({ name : "" , price : 0 , per : '' , picture : '' });
    axios({
      method : 'POST',
      url : 'http://localhost:8000/products',
      data: this.state
    })
    .then( (data) => {
      console.log(data);
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  // addProduct = (product) => {
  //   let newProd = {
  //     id : uuid(),
  //     ...product
  //   }
  //   mockproducts.push(newProd);
  // }



  render() {
    return (
      <Container className = 'flexible-col justify-content-center align-items-center' >
        <form onSubmit = {this.handleSubmit}>
          <FormField>
            <label htmlFor = 'name' >Nombre del producto </label><br/>
            <FormInput onChange = {this.handleChange} type = "text" id = "name" name = "name" value = {this.state.name}></FormInput>
          </FormField>
          <FormField>
            <label htmlFor = 'price' >Precio por unidad de medida </label><br/>
            <FormInput onChange = {this.handleChange} type = 'number' id = "price" name = "price" value = {this.state.price}></FormInput>
          </FormField>
          <FormField>
            <label htmlFor = 'location' >Ubicación </label><br/>
            <FormInput onChange = {this.handleChange} type = 'text' id = "location" name = "location" value = {this.state.location}></FormInput>
          </FormField>
          <FormField>
            <label htmlFor = 'image' >Agregar una imagen </label><br/>
            <FormInput onChange = {this.handleChange} type = 'text' id = "image" name = "image" value = {this.state.image}></FormInput>
          </FormField>
          <FormField>
            <label htmlFor = 'image2' >Agregar una imagen </label>
            <FormInput onChange = {this.handleChange} type = 'file' id = "image2" name = "image2" ></FormInput>
          </FormField>
          <ButtonAdd>Agregar producto</ButtonAdd>
        </form>
        <ButtonReturn>
          <Link to = '/ProducerPl'>Ir a mis productos</Link>
        </ButtonReturn>
      </Container>
    )
  }

}

export default NewProduct;
