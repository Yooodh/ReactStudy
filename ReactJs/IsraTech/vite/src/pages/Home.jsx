import React from 'react';
import Navbar from '../components/Navbar';
import chair1 from '../assets/chair_image1.png';
import chair2 from '../assets/chair_image2.png';

const Home = () => {
  return (
    <div className='container mx-auto relative overflow-hidden bg-white'>
      <Navbar />
      <div className='px-6'>
        <div
          className='hidden lg:block absolute bg-primary rounded-full xl:h-[35rem] xl:w-[40rem] lg:w-[30rem] lg:h-[30rem] -top-24 -right-60'
          data-aos='fade-right'
          data-aos-duration='3000'
        ></div>
        <div className='lg:flex gap-x-8 items-enter justify-between pt-24'>
          <div className='lg:w-2/5' data-aos='fade-right'>
            <div className='lg:text-xl lg:leading-normal font-semibold'>
              <h1>
                Good Living <br /> Better
                <span className='text-primary'>Life</span>
              </h1>
              <p className='py-4 xl:text-xl'>
                Find your way to the good living with our furniture.
              </p>
              <div className='relative h-14 flex flex-col justify-center my-6'>
                <input
                  type='text'
                  placeholder='Office chair'
                  className='bg-light rounded-full pl-6 h-full absolute border-none outline-none text-base'
                />
                <button className='bg-secondary text-white rounded-full px-8 text-sm absolute border-none right-2 h-[80%] hoverBtn'>
                  Search
                </button>
              </div>
              <div className='flex justify-between my-12'>
                <span className='text-center'>
                  <h6 className='text-3xl font-semibold'>419</h6>
                  <p className='text-gray'>Total Products</p>
                </span>
                <span className='text-center'>
                  <h6 className='text-3xl font-semibold'>102</h6>
                  <p className='text-gray'>Crafters</p>
                </span>
                <span className='text-center'>
                  <h6 className='text-3xl font-semibold'>5k</h6>
                  <p className='text-gray'>Relations</p>
                </span>
              </div>
            </div>
            <div>
              <div
                className='lg:w-1/2 relative z-10'
                data-aos='fade-down'
                data-aos-easing='linear'
                data-aos-duration='3000'
              ></div>
              <img src={chair1} alt='image of a chair' className='w-full' />
            </div>
          </div>

          <div>
            <img src={chair2} alt='chair image' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
