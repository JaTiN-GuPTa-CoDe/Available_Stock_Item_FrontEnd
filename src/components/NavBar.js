import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/NavBar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <header className="navbar-header"> 
        <nav>
          <h2><Link to="/">Logo</Link></h2>
          <button className="menu-toggle" onClick={toggleMenu}>
            {isOpen ? 'Close' : 'Menu'}
          </button>
          <ul className={`nav-list ${isOpen ? 'open' : ''}`}>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/product">Product</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
