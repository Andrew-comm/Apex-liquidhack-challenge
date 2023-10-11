import React from 'react'
import '../assets/static/navbar.css'
import linkedImage from "../assets/images/linkedin.svg"
import callImage from "../assets/images/call.svg"
import twitterImage from "../assets/images/twitter.svg"
import facebookImage from "../assets/images/facebook.svg"



const Navbar2 = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-icons"> 
        <li className="icon-2"><a href="/"><img src={callImage} alt="call"/></a></li>        
        <li className="icon"><a href="/"><img src={facebookImage} alt="facebook"/></a></li>
        <li className="icon"><a href="/"><img src={twitterImage} alt="twitter"/></a></li>
        <li className="icon"><a href="/"><img src={linkedImage} alt="linkedin"/></a></li>
      </ul>
    </nav>
  )
}

export default Navbar2
