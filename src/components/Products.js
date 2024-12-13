// components/Products.js
import React from 'react';
import ProductCard from './ProductCard';
import im from '../assets/im1.jpg'
import im2 from '../assets/im2.jpg'
import Gallery from './gallery';
import im3 from '../assets/im3.jpg'
import im4 from '../assets/im4.jpg'
function Products() {
  const chiliProducts = [
    {
      name: 'Ethiopia',
      description: 'Our Organic Red Chili Powder is made from the finest hand-picked chilies.',
      price: '$8.99',
      image: im
    },
    {
      name: 'Smoked',
      description: 'Get a rich smoky flavor in your dishes with our Smoked Chili Powder.',
      price: '$9.99',
      image: im2
    },
    {
      name: 'Hot  Powder',
      description: 'For those who love the heat! Our Hot Chili Powder packs a punch.',
      price: '$7.99',
      image: im3
    },
    {
        name: 'Hot Chili Powder',
        description: 'For those who love the heat! Our Hot Chili Powder packs a punch.',
        price: '$7.99',
        image: im4
      }
  ];

  return (
    <div className="products-section" id="products">
      <h2>Our Products</h2>
      <div className="product-grid">
        {chiliProducts.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
      <Gallery/>

    </div>
  );
}

export default Products;
