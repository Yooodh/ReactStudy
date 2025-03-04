'use client';
import React, { useState } from 'react';
import Logo from './logo';
import MenuIcon from './menu-icon';
import Link from 'next/link';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header>
      <div className='flex justify-between items-center'>
        <Logo />

        {/* menu icon for mobile screens */}
        <div className='lg:hidden'>
          <MenuIcon isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>

        {/* center menu */}
        <div className='hidden lg:flex gap-[25px] text-[18px]'>
          <Link href={'/'} className='hover:text-primary transition-colors'>
            Explore
          </Link>
          <Link href={'/'} className='hover:text-primary transition-colors'>
            Marketplace
          </Link>
          <Link href={'/'} className='hover:text-primary transition-colors'>
            Community
          </Link>
          <Link href={'/'} className='hover:text-primary transition-colors'>
            Creator
          </Link>
          <Link href={'/'} className='hover:text-primary transition-colors'>
            Support
          </Link>
        </div>

        {/* button */}
        <div>button</div>
      </div>
    </header>
  );
};

export default Header;
