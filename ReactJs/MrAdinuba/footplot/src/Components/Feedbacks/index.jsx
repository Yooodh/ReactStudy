import React from 'react';
import './Feedbacks.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import user1 from '../../assets/user-1.jpeg';
import user2 from '../../assets/user-2.jpeg';
import user3 from '../../assets/user-3.jpeg';
import user4 from '../../assets/user-4.jpeg';
import user5 from '../../assets/user-5.jpeg';
import { FaStar } from 'react-icons/fa';

const Feedbacks = () => {
  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <section id='feedbacks'>
      <div className='container'>
        <h1 className='heading-1' data-aos='fade-left'>
          Customer <span className='gradient-text'>Feedbacks</span>
        </h1>
        <Slider {...settings} className='feedbacks-container'>
          {/* feed block start */}
          <div className='feed-block' data-aos='fade-right'>
            <div className='profile'>
              <img src={user1} alt='' />
            </div>
            <div className='details'>
              <p className='muted'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Incidunt autem a ut, reprehenderit minima fugiat, nemo libero
                minus placeat voluptas velit nostrum earum cumque architecto
                aliquam. Pariatur excepturi et saepe!
              </p>
            </div>
            <div className='bottom'>
              <div className='flex-center stars-container'>
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <h2 className='name'>Emmanuel Eze</h2>
              <p className='muted'>CEO Of Realist</p>
            </div>
          </div>
          {/* feed block end */}

          {/* feed block start */}
          <div className='feed-block' data-aos='fade-right'>
            <div className='profile'>
              <img src={user2} alt='' />
            </div>
            <div className='details'>
              <p className='muted'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Incidunt autem a ut, reprehenderit minima fugiat, nemo libero
                minus placeat voluptas velit nostrum earum cumque architecto
                aliquam. Pariatur excepturi et saepe!
              </p>
            </div>
            <div className='bottom'>
              <div className='flex-center stars-container'>
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <h2 className='name'>Jennifer</h2>
              <p className='muted'>Finance Specialist</p>
            </div>
          </div>
          {/* feed block end */}

          {/* feed block start */}
          <div className='feed-block' data-aos='fade-right'>
            <div className='profile'>
              <img src={user3} alt='' />
            </div>
            <div className='details'>
              <p className='muted'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Incidunt autem a ut, reprehenderit minima fugiat, nemo libero
                minus placeat voluptas velit nostrum earum cumque architecto
                aliquam. Pariatur excepturi et saepe!
              </p>
            </div>
            <div className='bottom'>
              <div className='flex-center stars-container'>
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <h2 className='name'>Caleb Chisom</h2>
              <p className='muted'>CEO Of Ade Shoes</p>
            </div>
          </div>
          {/* feed block end */}

          {/* feed block start */}
          <div className='feed-block' data-aos='fade-right'>
            <div className='profile'>
              <img src={user4} alt='' />
            </div>
            <div className='details'>
              <p className='muted'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Incidunt autem a ut, reprehenderit minima fugiat, nemo libero
                minus placeat voluptas velit nostrum earum cumque architecto
                aliquam. Pariatur excepturi et saepe!
              </p>
            </div>
            <div className='bottom'>
              <div className='flex-center stars-container'>
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <h2 className='name'>Joy Eze</h2>
              <p className='muted'>CEO Of Clean Concept</p>
            </div>
          </div>
          {/* feed block end */}

          {/* feed block start */}
          <div className='feed-block' data-aos='fade-right'>
            <div className='profile'>
              <img src={user5} alt='' />
            </div>
            <div className='details'>
              <p className='muted'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Incidunt autem a ut, reprehenderit minima fugiat, nemo libero
                minus placeat voluptas velit nostrum earum cumque architecto
                aliquam. Pariatur excepturi et saepe!
              </p>
            </div>
            <div className='bottom'>
              <div className='flex-center stars-container'>
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <h2 className='name'>Amaka Ogara</h2>
              <p className='muted'>CEO Of Ogara collection</p>
            </div>
          </div>
          {/* feed block end */}
        </Slider>
      </div>
    </section>
  );
};

export default Feedbacks;
