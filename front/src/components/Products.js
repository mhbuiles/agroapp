import React from 'react';

class Products extends React.Component {

  render() {
    return (
      <div key = {this.props.id} >
        {this.props.products.map( product =>
          <ul>{product.name}</ul>
        )}
      </div>
    )
  }

}

export default Products;
