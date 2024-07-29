import React from 'react';
import './Services.css';
import { services } from '../../data';
import ServiceCard from './ServiceCard';

const Services = () => {
  return (
    <section id='services'>
      <div className='container'>
        <div className='services__top'>
          <h1 className='title'>
            Our <span className='g-text'>Services</span>
          </h1>
          <h3 className='sub__title'>
            We specialize in strategic construction innovation.
          </h3>
        </div>
        <div className='services__container'>
          {services.map((service, index) => (
            <ServiceCard
              icon={service.icon}
              name={service.name}
              description={service.description}
              key={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
