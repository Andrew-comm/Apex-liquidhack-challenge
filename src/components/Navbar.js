import React from 'react';
import '../assets/static/navbar.css'; 

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className='list'><a href="/">HOME</a></li>
        <li className='list'><a href="/">CATEGORIES</a></li>
        <li className='list'><a href="/">ABOUT US</a></li>
        <li className='list'><a href="/">BLOG</a></li>
        <li className='list'><a href="/">FAQS</a></li>
        <li className='list'><a href="/">TEACH ON APEX CPD</a></li>
        <li className='list'><a href="/">CONTACT</a></li>    
  
      </ul>
    </nav>
  );
};

export default Navbar;
