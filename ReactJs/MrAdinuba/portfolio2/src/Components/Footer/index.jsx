import React from 'react';
import './Footer.css';
import Logo from '../Logo';
import { Link } from 'react-scroll';
import SocialHandles from '../SocialHandles';

const footerTabs = [
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

const Footer = () => {
  return (
    <footer>
      <div className='container'>
        <Logo />
        <div className='flex-center footer-tabs'>
          {footerTabs.map((tab, index) => (
            <Link
              className='flex-center tab'
              to={tab.id}
              spy={true}
              smooth={true}
              key={index}
            >
              <h4>{tab.name}</h4>
            </Link>
          ))}
        </div>
        <SocialHandles />
      </div>
      {/* end container */}
      <div className='flex-center copyright'>
        <p className='muted'>Build with love by Emmanuel Eze Adinuba</p>
        <p>Copyright &copy; All right reserved -| 2024</p>
      </div>
    </footer>
  );
};

export default Footer;
