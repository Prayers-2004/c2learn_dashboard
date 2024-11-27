import React from 'react';
import './Navbar.css';  // Make sure the CSS file is included

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <div className="navbar-logo">
          <img src="https://via.placeholder.com/100x50" alt="Logo" /> {/* Add your logo here */}
        </div>

        {/* Navigation Links */}
        <ul className="navbar-links">
          <li><a href="/">Home</a></li>
          <li><a href="/courses">Courses</a></li>
          <li><a href="/about">About Us</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>

        {/* Search Bar */}
        <div className="navbar-search">
          <input type="text" placeholder="Search for classes..." />
        </div>

        {/* Action Buttons */}
        <div className="navbar-actions">
          <button className="navbar-btn">Login</button>
          <button className="navbar-btn">Sign Up</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
