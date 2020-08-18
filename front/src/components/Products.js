import React from 'react';

class Products extends React.Component {

  render() {
    return (
      <div>
        {this.props.products.map( product =>
          <p  key = {this.props.id} >{product.name}</p>
        )}
      </div>
    )
  }

}

export default Products;
