import React, { useState } from 'react';
import './Header.css';

import Logo from '../../assets/logo.png';
import Bars from '../../assets/bars.png';

import { Link } from 'react-scroll';

const Header = () => {
  const mobile = window.innerWidth <= 768 ? true : false;
  const [menuOpened, setMenuOpened] = useState(false);

  return (
    <div className='header'>
      <img src={Logo} alt='' className='logo' />
      {menuOpened === false && mobile === true ? (
        <div
          style={{
            backgroundColor: 'var(--appColor)',
            padding: '0.5rem',
            borderRadius: '5px',
          }}
        >
          <img
            src={Bars}
            alt=''
            style={{ width: '1.5rem', height: '1.5rem' }}
            onClick={() => setMenuOpened(true)}
          />
        </div>
      ) : (
        <ul className='header-menu'>
          <li onClick={() => setMenuOpened(false)}>
            <Link
              onClick={() => setMenuOpened(false)}
              activeClass='active'
              to='home'
              span={true}
              smooth={true}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setMenuOpened(false)}
              activeClass='active'
              to='programs'
              span={true}
              smooth={true}
            >
              Programs
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setMenuOpened(false)}
              to='reasons'
              span={true}
              smooth={true}
            >
              Why us
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setMenuOpened(false)}
              to='plans'
              span={true}
              smooth={true}
            >
              Plans
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setMenuOpened(false)}
              to='testimonials'
              span={true}
              smooth={true}
            >
              Testimonials
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Header;
