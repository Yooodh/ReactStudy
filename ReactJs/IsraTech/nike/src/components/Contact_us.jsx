import React from 'react';

const Contact_us = () => {
  return (
    <div className='lg:py-32 py-16 lg:px-16 px-8' id='contact-us'>
      <div className='container mx-auto px-3 flex justify-between items-center max-lg:flex-col gap-10 w-full'>
        <h1 className='text-5xl leading-[68px] lg:max-w-md font-palanquin font-bold'>
          Sign Up for <span> Updates</span> & Newsletter
        </h1>
        <div className='lg:max-w-[40%] w-full flex items-center max-sm:flex-col gap-5 p-2.5 sm:border-solid sm:border sm:border-[#6D6D6D] rounded-full'>
          <input
            type='email'
            placeholder='Subscribe@nike.com'
            className='w-full rounded-full text-[#6D6D6D] p-5 sm:border-none border border-solid outline-none lg:flex-1'
          />
          <div className='flex max-sm:justify-end items-center max-sm:w-full'>
            <button className='flex justify-center items-center gap-2 px-7 py-4 border-none text-lg leading-none whitespace-pre rounded-full bg-[#FF6452]'>
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact_us;
