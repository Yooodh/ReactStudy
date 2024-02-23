import React from 'react';

const Products = () => {
  return (
    <div className='lg:py-24 py-12 lg:px-16 px-8' id='products'>
      <main className='container mx-auto max-sm:mt-12'>
        <div className='flex flex-col justify-start gap-5'>
          <h2 className='text-5xl font-palanquin font-bold'>
            <span className='text-[#FF6452]'>Popular</span> Products
          </h2>
          <p className='lg:max-w-lg text-[#6D6D6D] leading-7'>
            Experience top-notch quality and style with our sought-after
            selections. Discover a world a world of comfort, design and value
          </p>
        </div>
        <div></div>
      </main>
    </div>
  );
};

export default Products;
