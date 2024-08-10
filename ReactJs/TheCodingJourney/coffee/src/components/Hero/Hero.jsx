import React from 'react';
import BgImage from '../../assets/bg-slate.png';
import BlackCoffee from '../../assets/black.png';
import Navbar from '../Navbar/Navbar';
import { motion } from 'framer-motion';

const bgImgae = {
  backgroundImage: `url(${BgImage})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
};
const Hero = () => {
  return (
    <main style={bgImgae}>
      <section className='min-h-[750px] w-full'>
        <div className='container'>
          {/* Navbar section */}
          <Navbar />
          {/* Hero section */}
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center min-h-[850px]'>
            {/* text content section */}
            <div className='text-lightOrange mt-[100px] md:mt-0 p-4 space-y-28'>
              <motion.h1
                initial={{ opacity: 0, y: -100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  type: 'spring',
                  stiffness: 100,
                  damping: 10,
                  delay: 1,
                }}
                className='text-7xl font-bold leading-tight ml-14'
              >
                Blvck Tumbler
              </motion.h1>
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  type: 'spring',
                  stiffness: 100,
                  damping: 10,
                  delay: 1.2,
                }}
                className='relative'
              >
                <div className='relative z-10 space-y-4'>
                  <h1 className='text-2xl'>Black Lifestyle Lovers,</h1>
                  <h1 className='text-sm opacity-55 leading-loose'>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Quaerat, quasi? Iusto voluptates eaque harum, sequi voluptas
                    sunt obcaecati, accusantium architecto corrupti saepe
                    dolorem deserunt enim iure, blanditiis vero minus tempore!
                  </h1>
                </div>
                <div className='absolute -top-6 -left-10 w-[250px] h-[180px] bg-gray-700/25'></div>
              </motion.div>
            </div>
            {/* Hero Image section */}
            <div className='relative'>
              <motion.img
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  type: 'spring',
                  stiffness: 100,
                  damping: 10,
                  delay: 0.4,
                }}
                src={BlackCoffee}
                alt=''
                className='relative z-40 h-[400px] md:h-[700px] img-shadow'
              />
            </div>
            {/* orange circle ring */}
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                type: 'spring',
                stiffness: 100,
                damping: 10,
                delay: 0.8,
              }}
              className='h-[180px] w-[180px] absolute top-24 -right-16 border-primary border-[20px] rounded-full z-10'
            ></motion.div>

            {/* big text section */}
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                type: 'spring',
                stiffness: 100,
                damping: 10,
                delay: 0.8,
              }}
              className='absolute -top-20 left-[200px] z-[1]'
            >
              <h1 className='text-[140px] scale-150 font-bold text-darkGray/40 leading-none'>
                Blvck Tumbler
              </h1>
            </motion.div>

            {/* third div section */}
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                type: 'spring',
                stiffness: 100,
                damping: 10,
                delay: 1.2,
              }}
              className='text-lightOrange mt-[100px] md:mt-0 p-4 space-y-28'
            >
              <h1 className='opacity-0 text-7xl font-bold leading-tight ml-14'>
                Blvck Tumbler
              </h1>
              <div className='relative'>
                <div className='relative z-10 space-y-4'>
                  <h1 className='text-2xl'>Blvck Tumbler</h1>
                  <h1 className='text-sm opacity-55 leading-loose'>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Quaerat, quasi? Iusto voluptates eaque harum, sequi voluptas
                    sunt obcaecati,
                  </h1>
                </div>
                <div className='absolute -top-6 -left-10 w-[250px] h-[180px] bg-darkGray/50'></div>
              </div>
            </motion.div>
            <div></div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Hero;
