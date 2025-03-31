import React from 'react';
import './Hero.css';
import profile_img from '../../assets/profile_img.png';

const Hero = () => {
  return (
    <div id='hero' className='hero'>
      <img src={profile_img} alt='' />
      <h1>
        <span>I'm Havindu Hemal,</span>Frontend Developer
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, hic?
          Dolores error ducimus doloremque perspiciatis quo nostrum magni
          aspernatur.
        </p>
        <div className='hero-action'>
          <div className='hero-connect'>Connect with me</div>
          <div className='hero-resume'>My resume</div>
        </div>
      </h1>
    </div>
  );
};

export default Hero;
