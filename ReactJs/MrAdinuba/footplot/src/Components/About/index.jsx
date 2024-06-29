import React from 'react';
import './About.css';
import shoe1 from '../../assets/shoe-1.jpeg';

const About = () => {
  return (
    <section id='about'>
      <div className='container'>
        <div className='column about-image' data-aos='fade-right'>
          <img src={shoe1} alt='' />
        </div>
        <div className='column'>
          <h2 className='sub-title primary' data-aos='fade-left'>
            About Us
          </h2>
          <h1 className='heading-1 gradient-text' data-aos='fade-left'>
            Discover High-Quality Shoes Here
          </h1>
          <div className='content' data-aos='fade-left'>
            <p className='muted'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet,
              deserunt. Nulla nam saepe voluptas! Quibusdam soluta nulla
              perspiciatis delectus, officiis aspernatur aliquid blanditiis
              recusandae molestiae, labore excepturi libero ipsa nisi!
            </p>
            <p className='muted'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet,
              deserunt. Nulla nam saepe voluptas! Quibusdam soluta nulla
              perspiciatis delectus, officiis aspernatur aliquid blanditiis
              recusandae molestiae, labore excepturi libero ipsa nisi!
            </p>
          </div>
          <div className='buttons-wrapper' data-aos='fade-left'>
            <a href='#products' className='btn primary'>
              Explore more
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
