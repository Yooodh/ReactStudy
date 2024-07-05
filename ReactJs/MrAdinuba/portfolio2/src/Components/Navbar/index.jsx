import React, { useState } from 'react';
import './Navbar.css';
import Logo from '../Logo';
import { Link } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa';
import SocialHandles from '../SocialHandles';

const navTabs = [
  {
    name: 'Home',
    id: 'hero',
  },
  {
    name: 'About',
    id: 'about',
  },
  {
    name: 'Skills',
    id: 'skills',
  },
  {
    name: 'Services',
    id: 'services',
  },
  {
    name: 'Projects',
    id: 'projects',
  },
  {
    name: 'Feedbacks',
    id: 'feedbacks',
  },
  {
    name: 'Blog',
    id: 'blog',
  },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className='flex'>
      {open ? (
        <div className='sidebar-overlay' onClick={() => setOpen(!open)} />
      ) : (
        ''
      )}
      <div className='column flex-center'>
        <Logo />
      </div>
      <div
        className={`column flex-center tabs-container ${open ? 'active' : ''}`}
        id='sidebar'
      >
        <div
          className='flex-center icon-wrapper'
          id='close-sidebar-btn'
          onClick={() => setOpen(!open)}
        >
          <FaTimes />
        </div>
        {navTabs.map((tab, index) => (
          <Link
            className='flex-center tab'
            activeClass='active'
            to={tab.id}
            spy={true}
            smooth={true}
            offset={-70}
            onClick={() => setOpen(false)}
            key={index}
          >
            <h4>{tab.name}</h4>
          </Link>
        ))}
      </div>
      <div className='column flex-center buttons-wrapper'>
        <SocialHandles />
        <Link to='contact' smooth={true} className='btn primary contact-btn'>
          Hire me
        </Link>
        <div
          className='flex-center icon-wrapper'
          id='menu-btn'
          onClick={() => setOpen(!open)}
        >
          {<FaBars />}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
