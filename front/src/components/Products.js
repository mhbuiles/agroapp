import React from 'react';

class Products extends React.Component {

  render() {
    return (
      <div>
        {this.props.products.map( product =>
          <p  key = {product._id} >{product.name}</p>
        )}
      </div>
    )
  }

}

export default Products;
