import React, { useRef, useState } from 'react';
import './About.css';
import introVideo from '../../assets/video.mp4';
import { FaTimes } from 'react-icons/fa';
import amazonLogo from '../../assets/logos/amazon.png';
import facebookLogo from '../../assets/logos/facebook.png';
import goolgeLogo from '../../assets/logos/google.png';
import linkedinLogo from '../../assets/logos/linkedin.png';
import microsoftLogo from '../../assets/logos/microsoft.png';
import netflixLogo from '../../assets/logos/netflix.png';
import paypalLogo from '../../assets/logos/paypal.png';
import samsungLogo from '../../assets/logos/samsung.png';
import skypeLogo from '../../assets/logos/skype.png';
import whatsappLogo from '../../assets/logos/whatsapp.png';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/all';
gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const [openVideo, setOpenVideo] = useState(false);
  const container = useRef();
  useGSAP(
    () => {
      gsap
        .timeline({
          delay: 0.5,
          scrollTrigger: {
            trigger: container.current,
            start: '20% bottom',
            end: 'bottom top',
          },
        })
        .fromTo(
          [
            '#about .section-header .sub-title',
            '#about .section-header .heading-1',
            '#about .section-header .muted',
          ],
          {
            opacity: 0,
            y: 60,
          },
          {
            opacity: 1,
            y: 0,
            stagger: 0.5,
          }
        )
        .fromTo(
          [
            '#about .section-header .readmore-btn',
            '#about .section-header .play-btn',
          ],
          {
            opacity: 0,
            x: -100,
          },
          {
            opacity: 1,
            x: 0,
            stagger: 0.5,
          }
        )
        .fromTo(
          '#about .brands-container',
          {
            opacity: 0,
            x: 100,
          },
          {
            opacity: 1,
            x: 0,
          }
        )
        .fromTo(
          '#about .education-experience-container .heading-1',
          {
            opacity: 0,
            x: -50,
          },
          {
            opacity: 1,
            x: 0,
            stagger: 0.5,
          }
        )
        .fromTo(
          '#about .education-experience-container .contents',
          {
            opacity: 0,
            x: 100,
          },
          {
            opacity: 1,
            x: 0,
            stagger: 0.5,
          }
        );
    },
    { scope: container }
  );

  return (
    <section id='about' ref={container}>
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

        <div className='brands-container'>
          <div className='logos-slide gray-scale'>
            <img src={amazonLogo} alt='' />
            <img src={facebookLogo} alt='' />
            <img src={goolgeLogo} alt='' />
            <img src={linkedinLogo} alt='' />
            <img src={microsoftLogo} alt='' />
            <img src={netflixLogo} alt='' />
            <img src={paypalLogo} alt='' />
            <img src={samsungLogo} alt='' />
            <img src={skypeLogo} alt='' />
            <img src={whatsappLogo} alt='' />
          </div>
          <div className='logos-slide gray-scale'>
            <img src={amazonLogo} alt='' />
            <img src={facebookLogo} alt='' />
            <img src={goolgeLogo} alt='' />
            <img src={linkedinLogo} alt='' />
            <img src={microsoftLogo} alt='' />
            <img src={netflixLogo} alt='' />
            <img src={paypalLogo} alt='' />
            <img src={samsungLogo} alt='' />
            <img src={skypeLogo} alt='' />
            <img src={whatsappLogo} alt='' />
          </div>
        </div>

        <div className='education-experience-container'>
          <div className='column'>
            <h2 className='gradient-text heading-1'>EDUCATION</h2>
            <div className='contents'>
              <div className='box'>
                <h4>2018 - 2022</h4>
                <h3>High School Degree</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab,
                  fugit dolore itaque ipsam iure est. Possimus, porro ipsum
                  facere ut explicabo deleniti rerum, omnis magni iure est
                  suscipit ratione praesentium.
                </p>
              </div>

              <div className='box'>
                <h4>2019 - 2023</h4>
                <h3>Bachelor's Degree</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab,
                  fugit dolore itaque ipsam iure est. Possimus, porro ipsum
                  facere ut explicabo deleniti rerum, omnis magni iure est
                  suscipit ratione praesentium.
                </p>
              </div>

              <div className='box'>
                <h4>2019 - 2023</h4>
                <h3>Master Degree</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab,
                  fugit dolore itaque ipsam iure est. Possimus, porro ipsum
                  facere ut explicabo deleniti rerum, omnis magni iure est
                  suscipit ratione praesentium.
                </p>
              </div>
            </div>
          </div>
          <div className='column'>
            <h2 className='gradient-text heading-1'>EXPERIENCE</h2>
            <div className='contents'>
              <div className='box'>
                <h4>2019 - 2023</h4>
                <h3>UI/UX Designer</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab,
                  fugit dolore itaque ipsam iure est. Possimus, porro ipsum
                  facere ut explicabo deleniti rerum, omnis magni iure est
                  suscipit ratione praesentium.
                </p>
              </div>

              <div className='box'>
                <h4>2019 - 2023</h4>
                <h3>Frontend Developer</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab,
                  fugit dolore itaque ipsam iure est. Possimus, porro ipsum
                  facere ut explicabo deleniti rerum, omnis magni iure est
                  suscipit ratione praesentium.
                </p>
              </div>

              <div className='box'>
                <h4>2019 - 2023</h4>
                <h3>Graphics Designer</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab,
                  fugit dolore itaque ipsam iure est. Possimus, porro ipsum
                  facere ut explicabo deleniti rerum, omnis magni iure est
                  suscipit ratione praesentium.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* end container */}
    </section>
  );
};

export default About;
