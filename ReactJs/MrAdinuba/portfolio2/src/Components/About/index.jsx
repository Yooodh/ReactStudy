import React, { useState } from 'react';
import './About.css';
import introVideo from '../../assets/video.mp4';
import { FaTimes } from 'react-icons/fa';

const About = () => {
  const [openVideo, setOpenVideo] = useState(false);

  return (
    <section id='about'>
      <div className='container'>
        <div className='section-header'>
          <h3 className='sub-title primary'>About Me</h3>
          <h1 className='heading-1'>
            I am Adin <span className='priamry'>uba</span>
          </h1>
          <p className='muted'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat
            tenetur iure voluptate corporis, est voluptas quae reiciendis dolor
            rerum eveniet debitis excepturi. Sapiente ipsa dicta vel dolor? Qui,
            quidem nemo.
          </p>
          <div className='flex-center buttons-wrapper'>
            <a href='#' className='btn primary readmore-btn'>
              Read More
            </a>
            <div className='video-cluster'>
              <div
                className={`flex-center play-btn ${openVideo ? 'active' : ''}`}
              >
                <div
                  className='flex-center play'
                  onClick={() => setOpenVideo(!openVideo)}
                ></div>
                <p>Play My Video</p>
              </div>
              <div className={`video-container ${openVideo ? 'active' : ''}`}>
                <div className='video-clip'>
                  <div
                    className='btn primary close-btn'
                    onClick={() => setOpenVideo(!openVideo)}
                  >
                    <FaTimes />
                  </div>
                  <video src={introVideo} controls></video>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* end section-header */}
      </div>
      {/* end container */}
    </section>
  );
};

export default About;
