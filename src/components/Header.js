import React from 'react'
import '../assets/static/header.css'; 
import myImage from '../assets/images/Apex.png'
import searchImage from '../assets/images/search.svg'


const Header = () => {
  return (
    <div className='header'>
  <div className='my-image'>
    <img src={myImage} alt="My header" />
  </div>

  <div className="search-bar">
    <input type="text" />
    <button type="submit">
    <img src={searchImage} alt="search-content" />
    </button>
  </div>
  
  <div className="mail-icon">
    <i className="fas fa-envelope"></i>
    <small>train@apexcpd.com</small>
  </div>

  <div className="sign">
    <p>Sign In</p>
  </div>
  
  <div>
    <button className='register'>Register</button>
  </div>
  
  <div className="cart-icon">
    <i className="fas fa-shopping-cart"></i>
    <span className="item-count">2</span>
  </div>
</div>

  )
}

export default Header
