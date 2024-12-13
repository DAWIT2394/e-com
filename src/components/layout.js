// components/Layout.js
import React from 'react';
import ProductCard from './ProductCard';
import Gallery from './gallery';
import Products from './Products';
function Layout() {
  return (
    <div className='lay'>
      <Gallery/>
      <Products/>
{/* <ProductCard/> */}
    </div>
  );
}

export default Layout;
