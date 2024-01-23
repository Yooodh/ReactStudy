import React from 'react';

// Imported Icons
import { SiConsul } from 'react-icons/si';
import { BsPhoneVibrate } from 'react-icons/bs';
import { AiOutlineGlobal } from 'react-icons/ai';

// Imported Images

const Navbar = () => {
  return (
    <div className='NavBar flex'>
      <div className='navBarOne flex'>
        <div>
          <SiConsul />
        </div>
        <div className='none flex'>
          <li className='flex'>
            <BsPhoneVibrate className='icon' /> Support
          </li>
          <li className='flex'>
            <AiOutlineGlobal className='icon' /> Languages
          </li>
        </div>
        <div className='atb flex'>
          <span>Sign In</span>
          <span>Sign Up</span>
        </div>
      </div>
      <div className='navBartTwo'>
        <div className='logoDiv'>
          <img src='' alt='' />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
