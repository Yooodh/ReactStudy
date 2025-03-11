import React from 'react';
import HeroFrame from './hero-frame';
import HeroMovingFrames from './hero-moving-frames';
import Stats from './stats';
import TextAnimation from '../text-animation';

const HeroSection = () => {
  return (
    <div className='flex flex-col gap-[38px] lg:gap-[16px] lg:py-[11px]'>
      {/* slogan */}
      <div className='text-center px-[10px]'>
        Naxos is a platform creating and trading digital assets.
      </div>

      {/* hero title */}
      <div className='text-25 lg:text-60 flex flex-col items-center justify-center gap-[14px] font-bold lg:py-[25px]'>
        {/* first line */}
        <div className='flex items-center gap-[15px]'>
          <TextAnimation delay={0.8} divideBy='letter'>
            Discover
          </TextAnimation>
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
          <TextAnimation delay={0.8} divideBy='letter'>
            Collect
          </TextAnimation>
        </div>

        {/* second line */}
        <div className='flex items-center gap-[15px]'>
          <HeroFrame
            height={{
              base: 34,
              lg: 68,
            }}
            width={{
              base: 123,
              lg: 251,
            }}
            bgImage='/images/hero-frame-2.png'
            animationType='move'
          />

          <TextAnimation delay={1.1} divideBy='letter'>
            & Sell Extraordinary
          </TextAnimation>
        </div>

        {/* third line */}
        <TextAnimation delay={1} divideBy='letter'>
          Rare NFTs
        </TextAnimation>
      </div>

      <div className='flex flex-col items-center justify-center gap-[25px] lg:flex-row lg:items-start lg:justify-between '>
        {/* moving frames */}
        <div className='lg:order-2'>
          <HeroMovingFrames />
        </div>

        {/* stats */}
        <div className='lg:order-3'>
          <Stats />
        </div>

        {/* small info */}
        <span className='flex w-[202px] items-center justify-center text-center text-[7px] leading-3 lg:order-1 lg:text-start lg:leading-6 lg:text-14'>
          <TextAnimation delay={1} divideBy='word'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic vitae,
            perferendis, provident illum cum voluptatibus aliquam praesentium
            dolores accusantium porro quia iure assumenda quam consequuntur esse
            nam. Natus, repellendus reiciendis.
          </TextAnimation>
        </span>
      </div>
    </div>
  );
};

export default HeroSection;
