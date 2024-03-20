import React, { useState } from 'react';
import { FiUser, FiShoppingBag } from 'react-icons/fi';
import { HiMenuAlt3 } from 'react-icons/hi';
import { MdClose } from 'react-icons/md';

const Navbar = () => {
  const [dropdown, setDropdown] = useState(false);

  const showDropdown = () => {
    setDropdown(!dropdown);
  };

  return (
    <nav>
      <div>
        <div>
          <div>
            <div>
              <h2>Cobalten</h2>
            </div>
          </div>
          <ul>
            <a href='#'>Blog</a>
            <a href='#'>Shop</a>
            <a href='#'>Contact</a>
            <a href='#'>Products</a>
          </ul>
          <div>
            <button>
              <FiShoppingBag size={18} />
            </button>
            <button>
              <FiUser size={18} />
            </button>
          </div>
          {dropdown ? (
            <div onClick={showDropdown}>
              <MdClose />
            </div>
          ) : (
            <div onClick={showDropdown}>
              <HiMenuAlt3 />
            </div>
          )}
        </div>
        {dropdown ? (
          <div onClick={showDropdown}>
            <div>
              <ul>
                <a href='#'>Blog</a>
                <a href='#'>Shop</a>
                <a href='#'>Contact</a>
                <a href='#'>Products</a>
              </ul>
              <div>
                <button>
                  <FiShoppingBag size={18} />
                </button>
                <button>
                  <FiUser size={18} />
                </button>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </nav>
  );
};

export default Navbar;
