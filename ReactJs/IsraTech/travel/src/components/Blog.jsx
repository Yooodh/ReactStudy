import React from 'react';
import { FaComment, FaRegEye } from 'react-icons/fa';

function Blog() {
  const Card = ({ image, text }) => {
    return (
      <div className='hover:shadow'>
        <div className='overflow-hidden my-0 mx-auto rounded-t-2xl'>
          <img
            src={image}
            alt=''
            className='rounded-t-2xl w-[300px] h-[300px] box-border hoverImg'
          />
        </div>
        <div className='bg-white p-3 rounded-b-2xl'>
          <p className='text-gray lg'>Travel</p>
          <h5 className='text-xl py-2 font-semibold'>{text}</h5>
          <div className='flex items-center justify-between pb-3'>
            <span>
              <FaComment size={20} />
              <p className='text-gray text-xl'>45</p>
            </span>
            <span className='flex items-center gap-2'>
              <FaRegEye size={20} />
            </span>
            <p className='text-xl'>23k+ view</p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div>
      <section className='bg-lightGray my-16 py-16 relative'>
        <div className='max-w-[1400px] mx-auto px-3'>
          <span className='flex flex-col items-center'>
            <p className='text-primary font-bold capitalize tracking-[0.15em]'>
              Blog Post
            </p>
            <h2 className='text-2xl font-bold capitalize my-4'>
              Our Latest Blog
            </h2>
          </span>
          <div className='grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6 my-12 relative z-10'>
            <Card image='' text='Beauty Place In Greece' />
            <Card image='' text='Beauty Place In Maldives' />
            <Card image='' text='Beauty Place In Thailand' />
            <Card image='' text='Beauty Place In Greece' />
          </div>
        </div>
      </section>
      <section className='flex justify-between max-w-[1400px] mx-auto lg:py-16 my-16 px-3 gap-8 overflow-hidden'>
        <img src='' alt='' />
        <img src='' alt='' />
        <img src='' alt='' />
        <img src='' alt='' />
      </section>
      <section className='bg-[url("./assets/bg1.jpg")] bg-no-repeat bg-cover bg-center relative z-10 lg:py-32 py-16'>
        <div className='flex flex-col justify-center items-center lg:w-1/2 mx-auto px-3'>
          <h2 className='font-bold text-2xl text-center mb-8'>
            Sign Up For Our Newsletter
          </h2>
          <div className='flex lg:flex-row flex-col items-center w-full gap-x[.1rem] gap-y-4 lg:bg-black rounded-md'>
            <input
              type='email'
              placeholder='Enter your email here'
              className='bg-[#22283] text-white rounded-1-md w-full h-16 px-4'
            />
            <button className='bg-primary text-white whitespace-pre h-16 px-8 rounded-r-md hover:bg-white hover:text-primary hover:shadow transition-bg hover:border hover:border-primary'>
              Subscribe Nows
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Blog;
