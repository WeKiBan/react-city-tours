import React from 'react';
import logo from '../../destination.png';
import './Navbar.scss'

function Navbar() {
  return (
    <nav className="navbar">
      <img style={{ width: '100px' }} src={logo} alt="logo" />
      <ul className="nav-links">
        <li>
          <a href="/" className="nav-link">
            Home
          </a>
        </li>
        <li>
          <a href="/" className="nav-link">
            About
          </a>
        </li>
        <li>
          <a href="/" className="nav-link">
            Tours
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
