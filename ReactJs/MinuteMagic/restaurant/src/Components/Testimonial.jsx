import React from 'react';
import { AiFillStar } from 'react-icons/ai';
import ProfilePic from '../Assets/john-doe-image.png';

const Testimonial = () => {
  return (
    <div className='work-section-wrapper'>
      <div className='work-section-top'>
        <p className='primary-subheading'>Testimaonial</p>
        <h1 className='primary-heading'>What They Are Saying</h1>
        <p className='primary-text'>
          Discover what our satisfied customers are saying about their dinding
          experiences with us. From rave reviews to glowing testimonials, find
          out Why they keep coming back for more.
        </p>
      </div>
      <div className='testimonial-section-bottom'>
        <img src={ProfilePic} alt='' />
        <div className='testimonial-stars-container'>
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
        <h2>John Doe</h2>
      </div>
    </div>
  );
};

export default Testimonial;
