import React from 'react';
import './Header.css';
import { Link } from 'react-scroll';
import { hero_image } from '../../assets';
import Achievement from '../Achievement';

const Header = () => {
  return (
    <header id='header'>
      <div className='container full__height'>
        <div className='row'>
          <div className='column'>
            <h1 className='title'>
              Building Dreams, <span className='g-text'>Creating Reality</span>
            </h1>
            <p className='text__muted description'>
              We are dedicated to turning your visions into tangible
              masterpieces. With years of experience and a team of skilled
              professionals, we specialize in delivering high-quality
              construction services tailored to meet the unique needs of each
              client.
            </p>
            <div className='buttons__container'>
              <Link
                to='services'
                smooth={true}
                className='btn
              '
              >
                Our Services
              </Link>
              <Link
                to='contact'
                smooth={true}
                className='btn btn__primary
              '
              >
                Contact Us
              </Link>
            </div>
          </div>
          <div className='column'>
            <div className='image__container'>
              <img src={hero_image} alt='' />
            </div>
          </div>
        </div>
        <Achievement />
      </div>
    </header>
  );
};

export default Header;
