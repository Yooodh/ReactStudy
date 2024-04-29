import React from 'react';
import { HiLocationMarker, HiStar } from 'react-icons/hi';

function Popular() {
  const Card = ({ image, text }) => {
    return (
      <div>
        <div className='overflow-hidden my-0 mx-auto rounded-t-2xl'>
          <img
            src={image}
            alt=''
            className='rounded-t-2xl w-[300px] h-[225px] box-border hoverImg'
          />
        </div>
        <div className='bg-withe shadow p-3 rounded-b-2xl'>
          <h5 className='text-[23px] py-4 font-semibold'>{text}</h5>
          <div className='flex items-center gap-2 py-3'>
            <HiLocationMarker className='text-primary' />
            <p className='text-gray text-xl'>Bali, indonesia</p>
          </div>
          <span className='flex items-center justify-between'>
            <div className='bg-white text-gray shadow rounded-sm w-16 p-2 flex items-center gap-1'>
              <HiStar className='text-orange' /> 4.5
            </div>
            <p>(2.5k Review)</p>
            <div className='bg-primary text-white text-lg text-center w-20 p-1 rounded-md transition-bg hover:bg:white hover:text-primary'>
              $1200
            </div>
          </span>
        </div>
      </div>
    );
  };

  return (
    <div>
      <section>
        <div>
          <span>
            <p>Popular Hotel</p>
            <h2>Most Popular Hotel</h2>
          </span>
          <div></div>
        </div>
      </section>
    </div>
  );
}

export default Popular;
