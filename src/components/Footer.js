import React from 'react'
import '../assets/static/footer.css'

import facebookImage from "../assets/images/facebook.svg"
import twitterImage from "../assets/images/twitter.svg"
import linkedImage from "../assets/images/linkedin.svg"



const Footer = () => {
  return (
    <div className='footer'>
        <h3>APEX CPD</h3>

        <ul className='about-page'>
            <li>ABOUT US</li>
            <li>Home</li>
            <li>Courses</li>
            <li>About Us</li>
            <li>Blog</li>
            <li>Faqs</li>
            <li>Downloads</li>
        </ul>


        <ul className='support-page'>
            <li>SUPPORT</li>
            <li>Contact Us</li>
            <li>System Requirements</li>
            <li>Register Activation Key</li>
            <li>Site feedback</li>
            
        </ul>
        <section className='connect-page'>
            <h3>CONNECT</h3>
            <ul className='icon-page'>                        
                <li className="icon"><a href="#"><img src={facebookImage} alt="facebook"/></a></li>
                <li className="icon"><a href="#"><img src={twitterImage} alt="twitter"/></a></li>
                <li className="icon"><a href="#"><img src={linkedImage} alt="linkedin"/></a></li>        
            </ul>

        </section>

        

      
    </div>
  )
}

export default Footer
