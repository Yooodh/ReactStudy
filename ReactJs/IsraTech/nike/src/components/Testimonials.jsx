import React from 'react';

const Testimonials = () => {
  return (
    <div className='lg:py-24 py-12 lg:px-16 px-8 bg-[#f5f6ff]'>
      <div className='container mx-auto'>
        <h1 className='font-palanquin text-center text-5xl font-bold'>
          What Our
          <span className='text-[#FF6452}'> Customers</span> Say?
        </h1>
        <p className='text-lg text-[#6D6D6D] leading-7 m-auto mt-4 max-w-text-center'>
          Hear genuie stories from our satisfied customers about their
          exceptional experence with us.
        </p>
        <div className='mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14'>
          <div className='flex justify-center items-center flex-col'>
            <img
              src='/customer1.svg'
              alt='customer1'
              className='rounded-full object-cover w-[120px] h-[120px]'
            />
            <p className='mt-6 max-w-sm text-center text-lgtext-[#6D6D6D] leading-7'>
              The attention to detail and the quality of the product exceeded my
              expectations. Highly recommended!
            </p>
            <div className='mt-3 flex justify-center items-center gap-2.5'>
              <img
                src='/star.svg'
                alt='start icon'
                width='24'
                height='24'
                className='object-contain m-0'
              />
              <p className='text-xl text-[#6D6D6D]'>(4.5)</p>
            </div>
            <h1 className='mt-1 font-palanquin text-3xl text-center font-bold'>
              Morich Brown
            </h1>
          </div>
          <div className='flex justify-center items-center flex-col'>
            <img
              src='/customer2.svg'
              alt='customer2'
              className='rounded-full object-cover w-[120px] h-[120px]'
            />
            <p className='mt-6 max-w-sm text-center text-lgtext-[#6D6D6D] leading-7'>
              The product not only met but exceeded my expectations. I&apos;ll
              definitely be a returning customer!
            </p>
            <div className='mt-3 flex justify-center items-center gap-2.5'>
              <img
                src='/star.svg'
                alt='start icon'
                width='24'
                height='24'
                className='object-contain m-0'
              />
              <p className='text-xl text-[#6D6D6D]'>(4.5)</p>
            </div>
            <h1 className='mt-1 font-palanquin text-3xl text-center font-bold'>
              Lota Mongeskar
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
