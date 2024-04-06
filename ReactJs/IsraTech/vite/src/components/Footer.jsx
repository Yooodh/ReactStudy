import React from 'react';
import { FaFacebookF, FaGoogle, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer>
      <div>
        <div>
          <FaTwitter />
          <FaFacebookF />
          <FaGoogle />
          <FaInstagram />
        </div>
        <div>
          <div>
            <h6>Shop</h6>
            <a href='#'>Chair</a>
            <a href='#'>Table</a>
            <a href='#'>Bed</a>
          </div>
          <div>
            <h6>Help</h6>
            <a href='#'>Contact</a>
            <a href='#'>Payment</a>
            <a href='#'>FAQ</a>
          </div>
        </div>
      </div>
      <div>
        <p>ⓒ 2020 Cobalten All rights reserved</p>
        <span>
          <a href='#'>Privacy policy</a>
          <a href='#'>Term & conditions</a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
