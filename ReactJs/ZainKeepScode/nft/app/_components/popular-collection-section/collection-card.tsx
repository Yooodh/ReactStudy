import Image from 'next/image';
import React from 'react';

const CollcetionCard = ({
  card,
}: {
  card: {
    name: string;
    username: string;
    avatar: string;
    category: string;
    nfts: {
      bg: string;
      image: string;
    }[];
  };
}) => {
  return (
    <div className='flex w-[100%] flex-col gap-[10px] rounded-[10px] bg-white/10 p-[10px]'>
      {/* header */}
      <div className='flex items-start justify-between'>
        {/* user info */}

        <div className='flex items-center gap-3'>
          {/* user image */}
          <div className='relative h-[26px] w-[26px]'>
            <Image
              src={card.avatar}
              alt='user'
              fill
              className='rounded-full object-cover'
            />
          </div>

          <div className='flex flex-col'>
            {/* user name */}
            <span className='text-12'>{card.name}</span>

            {/* user username */}
            <span className='text-10 text-white/50'>{card.username}</span>
          </div>
        </div>

        {/* likes counts */}
        <div className='flex items-cetner gap-2'>
          <div className='relative h-[18px] w-[18px]'>
            <Image
              src='/images/heart.png'
              alt='heart'
              fill
              className='object-contain'
            />
          </div>

          <span className='text-[11px]'>63</span>
        </div>
      </div>

      {/* grid */}
      <div className='grid grid-cols-2 gap-4'>
        {/* first columns with one image */}

        <div className='relative w-full h-[257px] overflow-hidden'>
          <Image
            src={card.nfts[0].image}
            alt='collection element'
            fill
            className='object-cover'
          />
        </div>

        {/* second column */}
        <div className='flex flex-col gap-4'>
          <div className='relative flex-1 w-full overflow-hidden rounded-lg'>
            <Image
              src={card.nfts[1].image}
              alt='collection image'
              fill
              className='object-contain'
            />
          </div>

          <div className='relative flex-1 w-full overflow-hidden rounded-lg'>
            <Image
              src={card.nfts[2].image}
              alt='collection image'
              fill
              className='object-contain'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollcetionCard;
