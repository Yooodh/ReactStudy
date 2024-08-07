import React, { useRef } from 'react';
import './Projects.css';
import project1 from '../../assets/project-1.png';
import project2 from '../../assets/project-2.jpg';
import project3 from '../../assets/project-3.jpg';
import project4 from '../../assets/project-4.png';
import { FaShare } from 'react-icons/fa';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/all';
gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
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
          ['#projects .section-header .heading-1'],
          { opacity: 0, y: 60 },
          {
            opacity: 1,
            y: 0,
            stagger: 0.5,
          }
        )
        .fromTo(
          '#projects .projects-container .project',
          { opacity: 0, y: 60 },
          {
            opacity: 1,
            y: 0,
            stagger: 0.5,
          }
        );
    },
    { scope: container }
  );
  return (
    <section id='projects' ref={container}>
      <div className='container'>
        <div className='section-header'>
          <h1 className='heading-1'>
            <span className='gradient-text'>Projects</span>
          </h1>
        </div>
        <div className='projects-container'>
          {/* project start */}
          <div className='flex project'>
            <div className='picture'>
              <img src={project1} alt='' />
            </div>
            <div className='details'>
              <h3 className='name'>Project management dashboard design</h3>
              <p className='muted'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum
                voluptatem, repellat ex quasi placeat iusto ea similique minima
                dolor tempora nulla modi doloremque, fugit voluptatum voluptates
                facere maiores porro laborum.
              </p>
            </div>
            <div className='flex buttons-wrapper'>
              <a href='#' className='btn share-btn'>
                <FaShare />
              </a>
              <a href='#' className='btn primary'>
                Demo
              </a>
            </div>
          </div>
          {/* project end */}

          {/* project start */}
          <div className='flex project'>
            <div className='picture'>
              <img src={project2} alt='' />
            </div>
            <div className='details'>
              <h3 className='name'>Files storage cloud app</h3>
              <p className='muted'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum
                voluptatem, repellat ex quasi placeat iusto ea similique minima
                dolor tempora nulla modi doloremque, fugit voluptatum voluptates
                facere maiores porro laborum.
              </p>
            </div>
            <div className='flex buttons-wrapper'>
              <a href='#' className='btn share-btn'>
                <FaShare />
              </a>
              <a href='#' className='btn primary'>
                Demo
              </a>
            </div>
          </div>
          {/* project end */}

          {/* project start */}
          <div className='flex project'>
            <div className='picture'>
              <img src={project3} alt='' />
            </div>
            <div className='details'>
              <h3 className='name'>Task management mobile app</h3>
              <p className='muted'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum
                voluptatem, repellat ex quasi placeat iusto ea similique minima
                dolor tempora nulla modi doloremque, fugit voluptatum voluptates
                facere maiores porro laborum.
              </p>
            </div>
            <div className='flex buttons-wrapper'>
              <a href='#' className='btn share-btn'>
                <FaShare />
              </a>
              <a href='#' className='btn primary'>
                Demo
              </a>
            </div>
          </div>
          {/* project end */}

          {/* project start */}
          <div className='flex project'>
            <div className='picture'>
              <img src={project4} alt='' />
            </div>
            <div className='details'>
              <h3 className='name'>Online payment dashboard</h3>
              <p className='muted'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum
                voluptatem, repellat ex quasi placeat iusto ea similique minima
                dolor tempora nulla modi doloremque, fugit voluptatum voluptates
                facere maiores porro laborum.
              </p>
            </div>
            <div className='flex buttons-wrapper'>
              <a href='#' className='btn share-btn'>
                <FaShare />
              </a>
              <a href='#' className='btn primary'>
                Demo
              </a>
            </div>
          </div>
          {/* project end */}
        </div>
      </div>
    </section>
  );
};

export default Projects;
