import React from 'react';
import HeroFrame from './hero-frame';

const HeroSection = () => {
  return (
    <div className='flex flex-col gap-[38px] lg:gap-[16px] lg:py-[11px]'>
      {/* slogan */}
      <div className='text-center px-[10px]'>
        Naxos is a platform creating and trading digital assets.
      </div>

      {/* hero title */}
      <div className='text-25 flex flex-col items-center justify-center gap-[14px] font-bold'>
        {/* first line */}
        <div className='flex items-center gap-[15px]'>
          <span>Discover</span>
          <HeroFrame
            height={{
              base: 34,
              lg: 68,
            }}
            width={{
              base: 123,
              lg: 326,
            }}
            bgImage='/images/hero-frame-1.jpg'
            animationType='scaleDown'
          />
          <span>Collect</span>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
