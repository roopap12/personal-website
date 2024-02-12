import React from 'react';
import './../Styles/Navbar.css'; 
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">
          <img src="R.png" alt="Logo" />
        </Link>
      </div>
      <div className="nav-links">
        <Link to="/about" className="nav-link">About me</Link>
        <Link to="/get-in-touch" className="nav-link">Get in touch</Link>
        {/* Add more navigation tabs as needed */}
      </div>
    </nav>
  );
}

export default Navbar;

