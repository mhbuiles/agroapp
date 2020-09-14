import React , { useState } from 'react';
import {
  Link,
  useHistory,
} from 'react-router-dom';
import axios from 'axios';
import './ComponentsCSS/newProduct.css'

function NewProduct( ) {

  const history = useHistory();

  const [ name , setName ] = useState('');
  const [ price , setPrice ] = useState('');
  const [ units , setUnits ] = useState('');
  const [ location , setLocation ] = useState('');
  const [ description , setDescription ] = useState('');
  const [ file , setFile ] = useState(null);
  const [ imageread , setImageread ] = useState(null);

  function handleFile ( event ) {
    setFile(event.target.files[0]);
    readFile(event.target.files[0]);
  }

  function readFile( file ) {
    const reader = new FileReader();
    reader.onload = event => setImageread(event.target.result);
    reader.readAsDataURL( file );
  }

  function handleSubmit(event) {
    event.preventDefault();

    const data2 = new FormData();
    data2.append( 'name' , name );
    data2.append( 'price' , price );
    data2.append( 'units' , units );
    data2.append( 'location' , location );
    data2.append( 'description' , description );
    if( file ) {
      data2.append( 'file' , file , file.name );
    }

    axios({
      method : 'POST',
      url : 'http://localhost:8000/products',
      data: data2,
      headers : {
        Authorization : `Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'multipart/form-data',
      }
    })
    .then( (data) => {
      setName('');
      setPrice('');
      setUnits('');
      setLocation('');
      setDescription('');
      history.push('/ProducerPL');
    })
    .catch(function (error) {
      console.log(error);
    });
  }

    return (
      <div className = 'containerNewProd flexible-col justify-content-center align-items-center' >
        <h2 className='newProdTitle'>Agregar un Producto</h2>
        <form onSubmit = {handleSubmit}>
          <fieldset className="formField">
            <label className="newProdLabel" htmlFor = 'name' >Nombre del producto </label><br/>
            <input className='formInput' onChange = { (event) => setName(event.target.value) } type = "text" id = "name" name = "name" value = {name}></input>
          </fieldset>
          <fieldset className="formField">
            <label className="newProdLabel" htmlFor = 'price' >Precio por unidad de medida </label><br/>
            <input className='formInput' onChange = { (event) => setPrice(event.target.value) } type = 'text' id = "price" name = "price" value = {price}></input>
          </fieldset>
          <fieldset className="formField">
            <label className="newProdLabel" htmlFor = 'units' >Unidad de medida </label><br/>
            <input className='formInput' onChange = { (event) => setUnits(event.target.value) } type = 'text' id = "units" name = "units" value = {units}></input>
          </fieldset>
          <fieldset className="formField">
            <label className="newProdLabel" htmlFor = 'location' >Ubicación </label><br/>
            <input className='formInput' onChange = { (event) => setLocation(event.target.value) } type = 'text' id = "location" name = "location" value = {location}></input>
          </fieldset>
          <fieldset className="formField">
            <label className="newProdLabel" htmlFor = 'file' >Agregar una imagen </label>
            <input className='formInput' onChange = {handleFile} type = 'file' id = "file" name = "file" accept = 'image/*' ></input>
            { imageread && ( <img src = {imageread} alt = '' className = 'fileReadImage'/>)}
          </fieldset>
          <fieldset className="formField">
            <label className="newProdLabel" htmlFor = 'description' >Agregar descripción</label>
            <textarea className='newProdTxtArea' name="description" rows="5" onChange = { (event) => setDescription(event.target.value) } value = {description}></textarea>
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
