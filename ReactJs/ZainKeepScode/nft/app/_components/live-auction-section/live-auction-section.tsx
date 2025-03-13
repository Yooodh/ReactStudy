import Image from 'next/image';
import React from 'react';
import TextAnimation from '../text-animation';

const LiveAuctionSection = () => {
  return (
    <div className='flex flex-col gap-[40px]'>
      {/* monkey frame */}
      <div className='relative h-[243px] rounded-lg overflow-hidden bg-gradient-to-b from-[#EF962E] to-[#FFAF36]'>
        <Image
          src='/images/black-monkey.png'
          alt='monkey'
          fill
          className='object-cover'
        />
      </div>

      {/* live auction details */}
      <div className='flex flex-col gap-[14px]'>
        {/* live auction */}
        <div className='flex gap-[12px]'>
          <div className='h-auto w-[4px] rounded-md bg-[#6351DB]' />
          <span className='text-[12px]'>
            <TextAnimation divideBy='word' delay={0.3}>
              Live Auction
            </TextAnimation>
          </span>
        </div>

        {/* heading */}
        <span className='text-30 font-bold'>
          <TextAnimation delay={0.4} divideBy='word'>
            Bored_Ape #333
          </TextAnimation>
        </span>

        {/* blocks */}
        <div className='flex justify-between gap-[20px]'>
          <Block
            title='Creator'
            image='/images/avatars/avatar-1.avif'
            name='@obsjduro'
          />

          <Block
            title='Collection'
            image='/images/avatars/avatar-2.avif'
            name='Your Dream'
          />
        </div>
      </div>
    </div>
  );
};

const Block = ({
  title,
  image,
  name,
}: {
  title: string;
  image: string;
  name: string;
}) => {
  return (
    <div className='flex flex-1 flex-col gap-[14px]'>
      <span className='text-14'>
        <TextAnimation delay={0.5} divideBy='word'>
          {title}
        </TextAnimation>
      </span>

      <div className='flex gap-[14px] rounded-lg bg-[#454448] px-[20px] py-[11px]'>
        <div className='relative h-[25px] w-[25px]'>
          <Image src={image} alt={'3d avatar'} fill className='rounded-full' />
        </div>
        <span className='text-14'>
          <TextAnimation delay={0.5} divideBy='word'>
            {name}
          </TextAnimation>
        </span>
      </div>
    </div>
  );
};

export default LiveAuctionSection;
