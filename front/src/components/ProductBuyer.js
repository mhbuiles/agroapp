import React from 'react'
import './ComponentsCSS/ProductBuyer.css'
import {
    BrowserRouter as Router,
    Link,
    Switch,
    Route,
    Redirect,
    withRouter,
    useHistory,
  } from 'react-router-dom';


function ProductBuyer({ product }){
    return(
        <Link to={`/ProductsList/ProductView/${product._id}`}>
            <div className='container beigeBG'>
                <div className='smallCont'>
                    <img className='prodImage' src={product.image}></img>
                </div>
                <div className='smallCont'>
                    <h3 className='prodTitle'>Producto</h3>
                    <p className='prodInfo'>{product.name}</p>
                    <h3 className='prodTitle'>Precio</h3>
                    <p className='prodInfo'>{product.price} {'Pesos'}</p>
                    <h3 className='prodTitle'>Ubicación</h3>
                    <p className='prodInfo'>{product.location}</p>
                </div>   
                <div>
                    <h3 className='prodDetails'>Detalles</h3>
                </div>         
            </div>
        </Link>
    );
}

export default ProductBuyer