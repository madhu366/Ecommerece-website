import React from 'react';
import './Footer.css';
import footer_logo from '../Assets/eblogo.png';
import insta_icon from '../Assets/insta_icon.png';
import whatsapp_icon from '../Assets/whatsapp_icon.png';

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-logo">
        <img src={footer_logo} alt="EcoBloom logo" />
      </div>
      <ul className="footer-links">
        <li>Products</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="footer-social-icon">
        <div className="footer-icons-container">
          <img src={insta_icon} alt='Instagram icon' />
        </div>
        <div className="footer-icons-container">
          <img src={whatsapp_icon} alt='WhatsApp icon' />
        </div>
      </div>
      <div className="footer-copyright">
        <hr />
        <p>Copyright © 2024 - All Rights Reserved</p>
      </div>
    </div>
  );
}

export default Footer;
