import React from 'react'
import ProductBuyer from './ProductBuyer';

function ProductsBuyer({ products }){
    return(
        <div>
            {products.map((product) => (
                <ProductBuyer product={product}/>
            ))}
        </div>
    );
}

export default ProductsBuyer