import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-brand">
        <span className="material-icons">movie</span>
        EZTechMovie
      </div>
      <ul className="nav-links">
        <li><Link to="/">StreamList</Link></li>
        <li><Link to="/movies">Movies</Link></li>
        <li><Link to="/cart">Cart</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/search">Movie Search</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;