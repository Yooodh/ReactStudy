import React from 'react';
import { HiStar } from 'react-icons/hi';

function Packages() {
  const Card = ({ image, text }) => {
    return (
      <div>
        <div className='overflow-hidden my-0 mz-auto rounded-2xl'>
          <img
            src={image}
            alt=''
            className='rounded-2xl w-[300px] h-[300px] hoverImg'
          />
        </div>
        <h5 className='text-2xl py-4 font-semibold'>{text}</h5>
        <span className='flex items-center justify-between'>
          <div className='bg-white text-gray shadow rounded-sm w-16 p-2 flex items-center gap-1'>
            <HiStar className='text-orange' />
          </div>
          <p>(2.5k Review)</p>
          <div className='bg-primary text-white text-lg text-center w-20 p-1 rounded-md transition-bg hover:bg-white hover:text-primary'>
            $1200
          </div>
        </span>
      </div>
    );
  };

  return (
    <div className='bg-lightGray my-16 py-16 relative'>
      <div className='max-w-[1400px] mx-auto px-3'>
        <span className='flex flex-col items-center'>
          <p className='text-4xl text-center font-bold capitalize tracking-[0.15em]'>
            Popular Packages
          </p>
          <h2 className='text-4xl text-center font-bold capitalize my-4'>
            Checkout our packages
          </h2>
        </span>
        <div className='grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6 my-12 relative z-10'>
          <Card
            image='/img5.jpg'
            text='Enjoy The Beauty Place In Greece City'
          />
          <Card
            image='/img6.jpg'
            text='Enjoy The Beauty Place In Maldives City'
          />
          <Card
            image='/img7.jpg'
            text='Enjoy The Beauty Place In Bhutan City'
          />
          <Card image='/img8.jpg' text='Enjoy The Beauty Place In Paris City' />
        </div>
        <img
          src='star.png'
          alt=''
          className='lg:block hidden absolute -top-16 left-0'
        />
        <img
          src='/doughnut.png'
          alt=''
          className='lg:block hidden absolute -bottom-16 left-0'
        />
        <img
          src='/flower.png'
          alt=''
          className='lg:block hidden absolute -bottom-0 right-0'
        />
      </div>
    </div>
  );
}

export default Packages;
