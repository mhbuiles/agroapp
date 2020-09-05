import React from 'react';
import {
  Link
} from 'react-router-dom';
import axios from 'axios';
import './ComponentsCSS/newProduct.css'

class NewProduct extends React.Component {

  state = {
      name : '',
      price : 0,
      location : '',
      image : '',
      description: '',
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
    this.setState({ name : '' , price : 0 , location : '' , image : '' });
    axios({
      method : 'POST',
      baseURL : process.env.REACT_APP_SERVER_URL,
      url : '/products',
      data: this.state
    })
    .then( (data) => {
      console.log(data);
    })
    .catch(function (error) {
      console.log(error);
    });
  }


  render() {
    return (
      <div className = 'containerNewProd flexible-col justify-content-center align-items-center' >
        <h2 className='newProdTitle'>Agregar un Producto</h2>
        <form onSubmit = {this.handleSubmit}>
          <fieldset className="formField">
            <label className="newProdLabel" htmlFor = 'name' >Nombre del producto </label><br/>
            <input className='formInput' onChange = {this.handleChange} type = "text" id = "name" name = "name" value = {this.state.name}></input>
          </fieldset>
          <fieldset className="formField">
            <label className="newProdLabel" htmlFor = 'price' >Precio por unidad de medida </label><br/>
            <input className='formInput' onChange = {this.handleChange} type = 'number' id = "price" name = "price" value = {this.state.price}></input>
          </fieldset>
          <fieldset className="formField">
            <label className="newProdLabel" htmlFor = 'location' >Ubicación </label><br/>
            <input className='formInput' onChange = {this.handleChange} type = 'text' id = "location" name = "location" value = {this.state.location}></input>
          </fieldset>
          <fieldset className="formField">
            <label className="newProdLabel" htmlFor = 'image' >Agregar una imagen </label><br/>
            <input className='formInput' onChange = {this.handleChange} type = 'text' id = "image" name = "image" value = {this.state.image}></input>
          </fieldset>
          <fieldset className="formField">
            <label className="newProdLabel" htmlFor = 'image2' >Agregar una imagen </label>
            <input className='formInput' onChange = {this.handleChange} type = 'file' id = "image2" name = "image2" ></input>
          </fieldset>
          <fieldset className="formField">
            <label className="newProdLabel" htmlFor = 'image2' >Agregar descripción</label>
            <textarea className='newProdTxtArea' name="description" rows="5" onChange = {this.handleChange} value = {this.state.description}></textarea>
          </fieldset>
          <button className='buttonAddNewProd'>Agregar producto</button>
        </form>
        <button className='buttonReturnNewProd'>
          <Link to = '/ProducerPl'>Ir a mis productos</Link>
        </button>
      </div>
    )
  }

}

export default NewProduct;
