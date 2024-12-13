// components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png'
function Navbar() {
  return (
    <nav className="navbar">
    <img src={logo} alt="Chili Power" />
    <ul className="nav-links">
      
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/Products">Products</Link></li>
        <li><Link to="/footer">Contact</Link></li>
        <li><Link to="/gallery">Gallery</Link></li>
    </ul>
</nav>
  );
}

export default Navbar;
