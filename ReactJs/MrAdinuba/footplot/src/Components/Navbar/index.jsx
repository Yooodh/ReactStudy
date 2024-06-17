import React from 'react';
import './Navbar.css';
import { FaCartShopping } from 'react-icons/fa6';

const Navbar = () => {
  return (
    <nav className='flex'>
      <div className='column flex-center tabs sidebar'>
        <a href='#' className='tab active'>
          <h4>Home</h4>
        </a>
        <a href='#about' className='tab'>
          <h4>About</h4>
        </a>
        <a href='#aroducts' className='tab'>
          <h4>Products</h4>
        </a>
        <a href='#feedbacks' className='tab'>
          <h4>Feedbacks</h4>
        </a>
        <a href='#contact' className='tab'>
          <h4>Contact</h4>
        </a>
      </div>
      <div className='column flex-center buttons-wrapper'>
        <button className='flex-center btn search-btn'>
          <FaCartShopping />
        </button>
        <button className='flex-center btn contact-btn'>Get started</button>
      </div>
    </nav>
  );
};

export default Navbar;
