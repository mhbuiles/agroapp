import React from 'react';

class Products extends React.Component {

  render() {
    return (
      <div>
        {this.props.products.map( product =>
          <div key = {product._id}>
            <p>{product.name}</p>
          </div>
        )}
      </div>
    )
  }

}

export default Products;
