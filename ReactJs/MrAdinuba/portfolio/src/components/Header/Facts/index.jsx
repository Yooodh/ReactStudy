import React, { useEffect, useState } from 'react';
import './Facts.css';
import Odometer from 'react-odometerjs';

const Facts = () => {
  const [experience, setExperience] = useState(0);
  const [projects, setProjects] = useState(0);
  const [clients, setClients] = useState(0);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setExperience(10);
      setProjects(150);
      setClients(2.5);
    }, 3000);
    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <div className='fact__container'>
      <div className='fact__item'>
        <div className='count__container'>
          <Odometer value={experience} />
          <span className='indicator'>+</span>
        </div>
        <p className='name'>Years Of Experience</p>
      </div>
      <div className='fact__item'>
        <div className='count__container'>
          <Odometer value={projects} />
          <span className='indicator'>+</span>
        </div>
        <p className='name'>Completed Projects</p>
      </div>
      <div className='fact__item'>
        <div className='count__container'>
          <Odometer value={clients} />
          <span className='indicator'>K</span>
        </div>
        <p className='name'>Satisfied Clients</p>
      </div>
    </div>
  );
};

export default Facts;
