import React from 'react';
import {
  Link
} from 'react-router-dom';
import uuid from 'uuid-random';
import {mockproducts} from './mock';

class NewProduct extends React.Component {

  state = {
      name : '',
      price : 0,
      per : '',
      picture : '',
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
    this.addProduct(this.state);
    this.setState({ name : "" , price : 0 , per : '' , picture : '' });
    console.log(mockproducts);
  }

  addProduct = (product) => {
    let newProd = {
      id : uuid(),
      ...product
    }
    mockproducts.push(newProd);
  }

  render() {
    return (
      <div>
        <form onSubmit = {this.handleSubmit}>
          <fieldset>
            <label htmlFor = 'name' >Nombre del producto </label>
            <input onChange = {this.handleChange} type = "text" id = "name" name = "name" value = {this.state.name}></input>
          </fieldset>
          <fieldset>
            <label htmlFor = 'price' >Precio por unidad de medida </label>
            <input onChange = {this.handleChange} type = 'number' id = "price" name = "price" value = {this.state.price}></input>
          </fieldset>
          <fieldset>
            <label htmlFor = 'per' >Unidad de medida </label>
            <input onChange = {this.handleChange} type = 'text' id = "per" name = "per" value = {this.state.per}></input>
          </fieldset>
          <fieldset>
            <label htmlFor = 'picture' >Agregar una imagen </label>
            <input onChange = {this.handleChange} type = 'file' id = "picture" name = "picture" value = {this.state.picture}></input>
          </fieldset>
          <button>Agregar producto</button>
        </form>
        <button><Link to = '/ProducerPl'>Ir a mis productos</Link></button>
      </div>
    )
  }

}

export default NewProduct;
