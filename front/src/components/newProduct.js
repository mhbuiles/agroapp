import React , { useReducer } from 'react';
import {
  Link
} from 'react-router-dom';
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

function reducer(prevState, newState) {
  return {
    ...prevState,
    ...newState,
  };
}

const initialState = {
  name: '',
  price : '',
  units : '',
  location: '',
  image : '',
};

function NewProduct( ) {

  const [ state , setState ] = useReducer( reducer , initialState );

  function handleChange(event) {
    const { value , name } = event.target;
    setState( { [name] : value } );
  }

  function handleSubmit(event) {
    event.preventDefault();
    setState({ name : '' , price : 0 , units : '' , location : '' , image : '' });
    axios({
      method : 'POST',
      url : 'http://localhost:8000/products',
      data: state,
      headers : {
        Authorization : `Bearer ${localStorage.getItem('token')}`
      }
    })
    .then( (data) => {
      console.log(data);
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  const { name , price , units , location , image } = state;

    return (
      <Container className = 'flexible-col justify-content-center align-items-center' >
        <form onSubmit = {handleSubmit}>
          <FormField>
            <label htmlFor = 'name' >Nombre del producto </label><br/>
            <FormInput onChange = {handleChange} type = "text" id = "name" name = "name" value = {name}></FormInput>
          </FormField>
          <FormField>
            <label htmlFor = 'price' >Precio por unidad de medida </label><br/>
            <FormInput onChange = {handleChange} type = 'number' id = "price" name = "price" value = {price}></FormInput>
          </FormField>
          <FormField>
            <label htmlFor = 'units' >Unidad de medida </label><br/>
            <FormInput onChange = {handleChange} type = 'text' id = "units" name = "units" value = {units}></FormInput>
          </FormField>
          <FormField>
            <label htmlFor = 'location' >Ubicación </label><br/>
            <FormInput onChange = {handleChange} type = 'text' id = "location" name = "location" value = {location}></FormInput>
          </FormField>
          <FormField>
            <label htmlFor = 'image' >Agregar una imagen </label><br/>
            <FormInput onChange = {handleChange} type = 'text' id = "image" name = "image" value = {image}></FormInput>
          </FormField>
          <FormField>
            <label htmlFor = 'image2' >Agregar una imagen </label>
            <FormInput onChange = {handleChange} type = 'file' id = "image2" name = "image2" ></FormInput>
          </FormField>
          <ButtonAdd>Agregar producto</ButtonAdd>
        </form>
        <ButtonReturn>
          <Link to = '/ProducerPL'>Ir a mis productos</Link>
        </ButtonReturn>
      </Container>
    )

}

export default NewProduct;
