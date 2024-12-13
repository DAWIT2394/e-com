// components/ProductCard.js
import React from 'react';

function ProductCard({ product }) {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      {/* <p className="price">{product.price}</p> */}
      <button className="buy-button">Buy Now</button>
    </div>
  );
}

export default ProductCard;
