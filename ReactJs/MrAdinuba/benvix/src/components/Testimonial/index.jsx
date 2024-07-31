import React from 'react';
import './Testimonial.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { testimonial } from '../../data';
import { FaStar } from 'react-icons/fa';

const Testimonial = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    centerMode: true,
    pauseOnHover: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          centerPadding: 0,
        },
      },
    ],
  };
  return (
    <section id='testimonial'>
      <div className='container'>
        <h1 className='title'>
          Clients <span className='g-text'>Testimonies</span>
        </h1>
        <h3 className='sub__title'>What our clients is saying</h3>
        <Slider {...settings} className='testimonial__container'>
          {testimonial.map((list, index) => (
            <React.Fragment key={index}>
              <div className='user__row'>
                <div className='profile'>
                  <img src={list.image} alt={list.name} />
                </div>
                <div className='details'>
                  <h3 className='name'>{list.name}</h3>
                  <small className='text__muted'>CEO of benvix</small>
                </div>
              </div>
              <p className='text__muted content'>{list.review}</p>
              <div className='stars__container'>
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
            </React.Fragment>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonial;
