import React from 'react';

import image1 from '../assets/image1.png';

function Hero() {
  return (
    <div className='bg-[url("./assets/bg1.jpg")] bg-no-repeat bg-cover bg-center relative z-10 pb-32 overflow-x-hidden'>
      <div className='lg:flex max-w-[1400px] mx-auto justify-between items-center px-3 pt-12'>
        <div className='lg:w-2/5'>
          <h2 className='xl:text-[4rem] lg:text-5xl text-4xl lg:text-left text-center font-bold lg:leading-snug mb-5'>
            It's A Big World Out There, Go Explore
          </h2>
          <p className='text-gray text-lg leading-normal mb-8'>
            Conveniently customiz proactiv web service for leveraged with out
            continualliery aggregate frictionle ou wellies richard. and very
            customize continually.
          </p>
          <div className='flex flex-1 gap-5'>
            <button className='bg-primary rounded transition-bg shadow h-16 lg:px-10 lg:w-auto w-full outline-none text-white hover:bg-white hover:text-primary cursor-pointer text-base hover:border hover:border-primary'>
              Get Exploration
            </button>
            <button className='bg-white rounded transition-bg shadow h-16 lg:px-10 lg:w-auto w-full outline-none text-primary hover:bg-primary hover:text-white cursor-pointer text-base hover:border hover:border-primary'>
              Read More
            </button>
          </div>
        </div>
        <div className='lg:w-3/5 flex items-center justify-end lg:pt-0 pt-10 lg:-mr-28'>
          <img src={image1} alt='' className='w-[45rem] h-full' />
        </div>
      </div>
    </div>
  );
}

export default Hero;
