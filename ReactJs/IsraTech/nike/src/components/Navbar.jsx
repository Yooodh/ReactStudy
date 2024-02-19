import React, { useState } from 'react';
import { HiMenuAlt3 } from 'react-icons/hi';
import { MdClose } from 'react-icons/md';

const Navbar = () => {
  const [dropdown, setDropdown] = useState(false);

  const showDropdown = () => {
    setDropdown(dropdown);
  };
  return (
    <nav>
      <div>
        <div>
          <div>
            <span onClick={() => (window.location = '/')}>
              <img src='/nike-1ogo.svg' alt='nike logo' />
            </span>
          </div>
          <ul>
            <a href='#home'>Home</a>
            <a href='#about'>About Us</a>
            <a href='#products'>Products</a>
            <a href='#contant-us'>Contant Us</a>
          </ul>
          {dropdown ? (
            <div onClick={showDropdown}>
              <MdClose />
            </div>
          ) : (
            <HiMenuAlt3 />
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
