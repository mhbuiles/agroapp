import React from 'react';
import {
  Link
} from 'react-router-dom';
import uuid from 'uuid-random';
import {mockproducts} from './mock';

class newProduct extends React.Component {

  state = {
      name : '',
      price : 0,
      per : '',
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
    this.setState({ name : "" , price : 0 , per : '' });
    console.log(mockproducts);
  }

  addProduct = (product) => {
    let newProduct = {
      id : uuid(),
      ...product
    }
    mockproducts.push(newProduct);
  }

  render() {
    return (
      <div>
        <form onSubmit = {this.handleSubmit}>
          <fieldset>
            <label htmlFor = "name">Nombre del producto</label>
            <input onChange = {this.handleChange} type = "text" id = "name" name = "name" value = {this.state.name}></input>
          </fieldset>
          <fieldset>
            <label>Precio por unidad de medida</label>
            <input onChange = {this.handleChange} type = 'number' id = "price" name = "price" value = {this.state.price}></input>
          </fieldset>
          <fieldset>
            <label>Unidad de medida</label>
            <input onChange = {this.handleChange} type = 'text' id = "per" name = "per" value = {this.state.per}></input>
          </fieldset>
          <button>Submit</button>
        </form>
        <Link to = '/ProducerPl'>Ir a mis productos</Link>
      </div>
    )
  }
  
}

export default newProduct;
