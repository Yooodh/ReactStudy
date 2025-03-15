'use client';
import React, { useState } from 'react';
import TextAnimation from '../text-animation';
import CollectionCategory from './collection-category';
import { COLLECTION_DATA } from '@/app/_data/collection';
import CollcetionCard from './collection-card';

const PopularCollectionSection = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  return (
    <div className='flex flex-col gap-[29px]'>
      <span className='text-30 px-[15px] text-center font-bold'>
        <TextAnimation delay={0.2} divideBy='letter'>
          Get Popular Collection
        </TextAnimation>
      </span>

      {/* category section */}
      <CollectionCategory
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />

      {/* collection cards */}
      <div className='flex flex-col flex-wrap items-center justify-start gap-[29px]'>
        {(selectedCategory === 'all'
          ? COLLECTION_DATA
          : COLLECTION_DATA.filter((card) => card.category === selectedCategory)
        ).map((card, i) => (
          <div>
            <CollcetionCard card={card} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularCollectionSection;
