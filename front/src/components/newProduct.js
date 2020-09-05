import React , { useReducer } from 'react';
import {
  Link
} from 'react-router-dom';
import axios from 'axios';
import './ComponentsCSS/newProduct.css'

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
  description: '',
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
      <div className = 'containerNewProd flexible-col justify-content-center align-items-center' >
        <h2 className='newProdTitle'>Agregar un Producto</h2>
        <form onSubmit = {handleSubmit}>
          <fieldset className="formField">
            <label className="newProdLabel" htmlFor = 'name' >Nombre del producto </label><br/>
            <input className='formInput' onChange = {handleChange} type = "text" id = "name" name = "name" value = {name}></input>
          </fieldset>
          <fieldset className="formField">
            <label className="newProdLabel" htmlFor = 'price' >Precio por unidad de medida </label><br/>
            <input className='formInput' onChange = {handleChange} type = 'number' id = "price" name = "price" value = {price}></input>
          </fieldset>
          <fieldset className="formField">
            <label className="newProdLabel" htmlFor = 'units' >Unidad de medida </label><br/>
            <input className='formInput' onChange = {handleChange} type = 'text' id = "units" name = "units" value = {units}></input>
          </fieldset>
          <fieldset className="formField">
            <label className="newProdLabel" htmlFor = 'location' >Ubicación </label><br/>
            <input className='formInput' onChange = {handleChange} type = 'text' id = "location" name = "location" value = {location}></input>
          </fieldset>
          <fieldset className="formField">
            <label className="newProdLabel" htmlFor = 'image' >Agregar una imagen </label><br/>
            <input className='formInput' onChange = {handleChange} type = 'text' id = "image" name = "image" value = {image}></input>
          </fieldset>
          <fieldset className="formField">
            <label className="newProdLabel" htmlFor = 'image2' >Agregar una imagen </label>
            <input className='formInput' onChange = {handleChange} type = 'file' id = "image2" name = "image2" ></input>
          </fieldset>
          <fieldset className="formField">
            <label className="newProdLabel" htmlFor = 'image2' >Agregar descripción</label>
            <textarea className='newProdTxtArea' name="description" rows="5" onChange = {handleChange} value = {description}></textarea>
          </fieldset>
          <button className='buttonAddNewProd'>Agregar producto</button>
        </form>
        <button className='buttonReturnNewProd'>
          <Link to = '/ProducerPl'>Ir a mis productos</Link>
        </button>
      </div>
    )

}

export default NewProduct;
