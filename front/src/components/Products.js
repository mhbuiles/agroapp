import React from 'react';
import MyProduct from './MyProduct';

class Products extends React.Component {

  render() {
    return (
      <div>
        {this.props.products.map( product =>
          <div key = {product._id}>
            <MyProduct product = {product}>{product.name}</MyProduct>
          </div>
        )}
      </div>
    )
  }

}

export default Products;
