import React from 'react';
import './Hero.css';
import heroImage from '../../assets/hero-shoe.png';
import { FaStar } from 'react-icons/fa6';
import SocialHandles from '../../Commons/SocialHandles';

const Hero = () => {
  const textPath = `    <textPath
                    xlink:href='#textcircle'
                    aria-label='Discount circle'
                    textLength='940'
                  >
                    We Provides High Quality Shoes
                  </textPath>
  `;
  return (
    <section id='hero'>
      <SocialHandles />
      <div className='container'>
        <div className='column'>
          <h1 className='heading-1'>
            Perfect <span className='stroke-text'>Shoes</span>
            <span className='gradient-text'>for Every Journey</span>
          </h1>
          <p className='muted'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque
            perferendis suscipit quam quae quos delectus voluptates, ab
            asperiores blanditiis. Nisi voluptates aspernatur impedit odit
            voluptas ratione maiores aliquam est dolor?
          </p>
          <div className='discount-wrapper'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              xml:lang='en'
              xmlns:xlink='http://www.w3.org/1999/xlink'
              viewBox='0 0 500 500'
            >
              <defs>
                <path
                  id='textcircle'
                  d='M250,400
                    a150,150 0 0,1 0,-300a150,150 0 0,1 0,300Z'
                  transform='rotate(12,250,250)'
                />
              </defs>
              <g class='textcircle'>
                <text
                  textLength='940'
                  class='text'
                  dangerouslySetInnerHTML={{ __html: textPath }}
                ></text>
              </g>
            </svg>
            <h1 className='discount'>40% Off</h1>
          </div>
          <div className='flex-center buttons-wrapper'>
            <a href='#' className='btn'>
              Show Now
            </a>
            <a href='#' className='btn primary'>
              More
            </a>
          </div>
        </div>
        <div className='column hero-image'>
          <img src={heroImage} alt='' />
          <div className='rating-group'>
            <div className='flex row'>
              <h1>4.5</h1>
              <div className='flex-center stars-container'>
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
            </div>
            <p>
              400k <span className='muted'>Total reviews</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
