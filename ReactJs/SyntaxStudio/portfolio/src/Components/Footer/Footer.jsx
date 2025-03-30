import React from 'react';
import './Footer.css';
import logo from '../../assets/logo.svg';
import user_icon from '../../assets/user_icon.svg';

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-top'>
        <div className='footer-top-left'>
          <img src={logo} alt='' />
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque
            cumque veritatis.
          </p>
        </div>
        <div className='footer-top-right'>
          <div className='footer-email-input'>
            <img src={user_icon} alt='' />
            <input type='email' placeholder='Enter Your email' />
          </div>
          <div className='footer-subscribe'>Subscribe</div>
        </div>
      </div>

      <hr />
      <div className='footer-bottom'>
        <p className='footer-bottom-left'>@ 2025 Syntax studio</p>
        <div className='footer-bottom-right'></div>
        <p>Term of Services</p>
        <p>Privacy Policy</p>
        <p>Connect With me</p>
      </div>
    </div>
  );
};

export default Footer;
