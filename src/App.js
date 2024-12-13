import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Products from './components/Products';
import Home from './components/home';
import Gallery from './components/gallery';
import ProductCard from './components/ProductCard';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <div className='tt'>
        <Navbar />
      </div>
      
      {/* Define Routes to render components based on the path */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
      <div>
      <Products/>

      </div>


      <Footer /> {/* Footer can stay outside of Routes if you want it on every page */}
    </div>
  );
}

export default App;
