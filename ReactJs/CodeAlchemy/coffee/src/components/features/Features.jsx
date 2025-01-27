import React from 'react';
import './features.css';

import { features } from '../../Data';

import shape from '../../assets/shape.png';

const Features = () => {
  return (
    <section className='festures section' id='features'>
      <h2 className='section__title' data-title='Features'>
        Our Best Features
      </h2>

      <div className='features__grid container grid'>
        {features.map(({ img, title, description }, index) => {
          return (
            <div className='features__item' key={index}>
              <img src={img} alt='' className='feature__img' />

              <h3 className='feature__title'>{title}</h3>
              <p className='feature__description'>{description}</p>

              <img src={shape} alt='' className='feature__shape' />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Features;
