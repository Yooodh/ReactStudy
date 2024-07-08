import React, { useState, useEffect } from 'react';
import './Facts.css';
import Odometer from 'react-odometerjs';

const Facts = () => {
  const [customers, setCustomers] = useState(0);
  const [experience, setExperience] = useState(0);
  const [projects, setProjects] = useState(0);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setCustomers(250);
      setExperience(7);
      setProjects(2.1);
    }, 3500);
    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <div className='facts-container'>
      {/* fact start */}
      <div className='fact'>
        <div className='flex-center top'>
          <Odometer value={customers} className='title' />
          <h1 className='title'>+</h1>
        </div>
        <p className='muted'>Happy Customers</p>
      </div>
      {/* fact end */}

      {/* fact start */}
      <div className='fact'>
        <div className='flex-center top'>
          <Odometer value={experience} className='title' />
          <h1 className='title'>+</h1>
        </div>
        <p className='muted'>Years Experience</p>
      </div>
      {/* fact end */}

      {/* fact start */}
      <div className='fact'>
        <div className='flex-center top'>
          <Odometer value={projects} className='title' />
          <h1 className='title'>k+</h1>
        </div>
        <p className='muted'>Completed Project</p>
      </div>
      {/* fact end */}
    </div>
  );
};

export default Facts;
