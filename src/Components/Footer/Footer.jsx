import React from 'react'
import './Footer.css'
import { assets } from '../../assets/frontend_assets/assets'
const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
           <img src={assets.logo} alt="" />
           <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</p>
         <div className="footer-sociall">
            
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
         </div>
       
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
           <h2>GET IN TOUCH</h2>
            <ul>
                <li>+1234-567-369</li>
                <li>contact@lele.com</li>
            </ul>
        </div>
      </div>
      <hr />
      <p className='copy-right'>Copyright 2025 @ lele.com -All Right Reserved</p>
    </div>
  )
}

export default Footer
