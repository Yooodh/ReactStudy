import React from 'react';
import TextAnimation from '../text-animation';
import Button from '../button';

const SubscribeSection = () => {
  return (
    <div className='flex flex-col w-full items-center justify-center gap-[16px] lg:gap-[37px] whitespace-pre-wrap'>
      <span className='text-30 lg:text-60 px-[45px] text-center font-bold'>
        <TextAnimation delay={0.4} divideBy='letter'>
          Subsribe to get latest updetes
        </TextAnimation>
      </span>

      <span className='text-[9px] lg:text-14'>
        <TextAnimation delay={0.5} divideBy='word'>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        </TextAnimation>
      </span>

      {/* input and button */}
      <div className='flex gap-[9px]'>
        {/* input */}
        <input
          type='email'
          placeholder='Enter your email'
          className='w-full max-w-[320px] min-w-[216px] rounded-md border-white/20 bg-white/10 px-[16px] lg:min-w-[554px]'
        />
        <Button variant='filled'>Subscribe</Button>
      </div>
    </div>
  );
};

export default SubscribeSection;
