import React from 'react';
import { FaFacebookF, FaGoogle, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className='container mx-auto px-6 py-8 bg-white rounded-b-[50px]'>
      <div className='flex flex-wrap items-end justify-between gap-8'>
        <div className='lg:w-[60%] flex items-center text-2xl gap-8'>
          <FaTwitter />
          <FaFacebookF />
          <FaGoogle />
          <FaInstagram />
        </div>
        <div className='flex justify-between gap-8 md:w-1/3 w-full'>
          <div className='flex flex-col gap-8'>
            <h6 className='text-xl font-semibold'>Shop</h6>
            <a
              href='#'
              className='no-underline text-black hover:text-secondary'
            >
              Chair
            </a>
            <a
              href='#'
              className='no-underline text-black hover:text-secondary'
            >
              Table
            </a>
            <a
              href='#'
              className='no-underline text-black hover:text-secondary'
            >
              Bed
            </a>
          </div>
          <div className='flex flex-col gap-8'>
            <h6 className='text-xl font-semibold'>Help</h6>
            <a
              href='#'
              className='no-underline text-black hover:text-secondary'
            >
              Contact
            </a>
            <a
              href='#'
              className='no-underline text-black hover:text-secondary'
            >
              Payment
            </a>
            <a
              href='#'
              className='no-underline text-black hover:text-secondary'
            >
              FAQ
            </a>
          </div>
        </div>
      </div>
      <div className='flex flex-wrap gap-4 items-center justify-between mt-16'>
        <p>ⓒ 2020 Cobalten All rights reserved</p>
        <span className='flex justify-between lg:w-1/3 w-full'>
          <a href='#' className='no-underline text-black hover:text-secondary'>
            Privacy policy
          </a>
          <a href='#' className='no-underline text-black hover:text-secondary'>
            Term & conditions
          </a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
