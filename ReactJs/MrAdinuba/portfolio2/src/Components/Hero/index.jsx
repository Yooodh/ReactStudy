import React from 'react';
import './Hero.css';
import hero_image from '../../assets/hero.png';
import { Link } from 'react-scroll';
import Facts from '../Facts';

const Hero = () => {
  return (
    <section id='hero' className='flex blur-effect'>
      <div className='container'>
        <div className='column hero-image'>
          <img src={hero_image} alt='' />
        </div>
        <div className='column'>
          <h1 className='heading-1'>
            Creative
            <span className='gradient-text'> User Interface </span>
            Designer
          </h1>
          <p className='muted description'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa
            labore corrupti aperiam, atque ullam rerum eius earum quo voluptate
            voluptatem fugiat voluptatum itaque mollitia officiis beatae
            delectus consequuntur provident cum.
          </p>
          <Facts />
          <div className='flex-center buttons-wrapper'>
            <Link to='projects' smooth={true} className='btn'>
              My Projects
            </Link>
            <Link to='projects' smooth={true} className='btn primary'>
              Hire me
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
