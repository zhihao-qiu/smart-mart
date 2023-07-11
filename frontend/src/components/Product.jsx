import React from 'react';

const Product = (props) => {
  const product=props.product;
  return (
    <div>
      <p>Product Brand: {product.brand}</p>
      <p>Product Name: {product.name}</p>
      <p>Product Description: {product.discription}</p>
      <p><img src={product.image} alt="Product Image"></img> </p>
      <p>Price: {product.price}</p>
    </div>
  );
};
export default Product;