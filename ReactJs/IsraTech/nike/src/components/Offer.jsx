import React from 'react';

import { HiArrowCircleRight } from 'react-icons/hi';

const Offer = () => {
  return (
    <div className='lg:py-24 py-12 lg:px-16 px-8'>
      <div className='flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container'>
        <div className='flex-1'>
          <img
            src='/offer.svg'
            alt='offers'
            width='773'
            height='687'
            className='object-contain w-full max-w-full h-auto'
          />
        </div>
        <div className='flex flex-col flex-1'>
          <h1 className='font-palanquin text-5xl capitalize font-bold lg:max-w-lg'>
            <span className='text-[#FF6452]'>Special</span> Offer
          </h1>
          <p className='mt-4 lg:max-w-lg text-[#6D6D6D] text-lg leading-7'>
            Embark on a shopping journey that redefines your experience with
            unbeatable deals. From premier selections to incredible savings, we
            offer unparalleled value that sets us apart.
          </p>
          <p className='mt-4 lg:max-w-lg text-[#6D6D6D] text-lg leading-7'>
            Navigate a realm of possibilities designed to fulfill your unique
            desires, surpassing the loftiest expectations. Your journey with us
            is nothing short of exceptional.
          </p>
          <div className='mt-11 flex flex-wrap gap-4'>
            <button className='flex justify-center items-center gap-2 px-7 py-4 border-none text-lg leading-none rounded-full bd-[#FF6452] text-white hoverBtn'>
              Shop now
              <HiArrowCircleRight className='ml-2 rounded-full text-2xl' />
            </button>
          </div>
          <button className='flex justify-center items-center gap-2 px-7 py-4 border border-solid text-lg leading-none rounded-full bg-white text-[#6D6D6D] border-[#6D6D6D] hoverBtn'>
            Learn more
          </button>
        </div>
      </div>
    </div>
  );
};

export default Offer;
