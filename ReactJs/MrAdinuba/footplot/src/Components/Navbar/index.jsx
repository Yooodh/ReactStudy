import React from 'react';
import './Navbar.css';
import { FaBars, FaCartShopping } from 'react-icons/fa6';
import Logo from '../../Commons/Logo';
import { FaTimes } from 'react-icons/fa';
import { ImSearch } from 'react-icons/im';

const Navbar = () => {
  return (
    <nav className='flex'>
      <div className='column flex-center'>
        <Logo />
      </div>
      <input type='checkbox' id='sidebar-toggle' />
      <label htmlFor='sidebar-toggel' className='overlay'></label>
      <div className='column flex-center tabs sidebar'>
        <label
          htmlFor='sidebar-toggle'
          className='flex-center icon-wrapper cancel-btn'
        >
          <FaTimes />
        </label>
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
          <ImSearch />
        </button>
        <button className='flex-center btn'>
          <FaCartShopping />
        </button>
        <button className='flex-center btn primary contact-btn'>
          Get started
        </button>
        <label htmlFor='sidebar-toggle' className='flex-center btn menu-btn'>
          <FaBars />
        </label>
      </div>
    </nav>
  );
};

export default Navbar;
