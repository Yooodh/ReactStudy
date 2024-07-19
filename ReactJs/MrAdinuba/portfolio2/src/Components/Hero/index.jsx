import React from 'react';
import './Hero.css';
import hero_image from '../../assets/hero.png';
import { Link } from 'react-scroll';
import Facts from '../Facts';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const Hero = () => {
  useGSAP(() => {
    gsap
      .timeline({ delay: 0.5 })
      .fromTo(
        '#hero .hero-image',
        { scale: 0 },
        {
          scale: 1,
          delay: 0.5,
        }
      )
      .fromTo(
        ['#hero .heading-1', '#hero .description'],
        {
          x: -20,
          opacity: 0,
        },
        { x: 0, opacity: 1, stagger: 0.5 }
      )
      .fromTo(
        '#hero .facts-container .fact',
        {
          x: 50,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          stagger: 0.5,
        }
      )
      .fromTo(
        '#hero .buttons-wrapper .btn',
        {
          x: 50,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          stagger: 0.5,
        }
      );
  });
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
