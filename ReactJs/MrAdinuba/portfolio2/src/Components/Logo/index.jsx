import React from 'react';
import './Logo.css';
import { FaSketch } from 'react-icons/fa';

const Logo = () => {
  return (
    <div className='flex-center logo'>
      <div className='flex-center logo-icon'>
        <FaSketch />
      </div>
      <h1 className='name'>Designer</h1>
    </div>
  );
};

export default Logo;
