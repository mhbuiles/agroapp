import React from 'react'
import './ComponentsCSS/MyProduct.css';
import {
    Link
  } from 'react-router-dom';


function MyProduct({ product }){
    return(
        <Link to={`/UserProfile/ProducerPL/MyProductView/${product._id}`}>
            <div className='containerMyProduct'>
                <div className='smallContMy'>
                    <img className='prodImageMy' src={product.image} alt = ''></img>
                </div>
                <div className='smallContMy'>
                    <p className='prodInfo'>{product.name}</p>
                </div>
            </div>
        </Link>
    );
}

export default MyProduct;
