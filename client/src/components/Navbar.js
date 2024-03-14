import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../mycss/Navbar.css';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleMenuClick = () => {
    setMenuOpen(false); // Close the menu when a menu item is clicked
  };

  return (
    <div className="navbar">
      <button className='hamburger-button' onClick={toggleMenu}>
        {menuOpen ? '✕' : '☰'}
      </button>
      <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
        <Link to="/" onClick={handleMenuClick}>Home</Link>
        <Link to="/projects" onClick={handleMenuClick}>Projects</Link>
        <Link to="/about" onClick={handleMenuClick}>About</Link>
        <Link to="/contact" onClick={handleMenuClick}>Contact</Link>
      </div>
    </div>
  );
}

export default Navbar;