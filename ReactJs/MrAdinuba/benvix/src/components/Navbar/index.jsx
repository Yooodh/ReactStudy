import React, { useEffect, useState } from 'react';
import './Navbar.css';
import { navTabs } from '../../data';
import { Link } from 'react-scroll';
import { FaTimes } from 'react-icons/fa';
import { RiMenu3Fill } from 'react-icons/ri';
import Logo from '../Logo';

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const handleScroll = () => {
    const currentScrollPosition = window.scrollY;
    if (currentScrollPosition > 145) {
      return setVisible(true);
    }
    setVisible(false);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${visible ? 'visible' : ''}`}>
      <Logo />
      <div className='box nav__tabs'>
        <div className='icon__container cancel__btn'>
          <FaTimes />
        </div>
        {navTabs.map((tab, index) => (
          <Link
            to={tab.id}
            className='tab'
            activeClass='active'
            smooth={true}
            offset={-60}
            key={index}
          >
            {tab.name}
          </Link>
        ))}
      </div>
      <div className='box buttons'>
        <Link to='contact' className='btn contact__btn'>
          Contact Us
        </Link>
        <div className='icon__container menu__btn'>
          <RiMenu3Fill />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
