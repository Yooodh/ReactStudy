import React, { useRef } from 'react';
import './Blog.css';
import blog1 from '../../assets/blog-1.png';
import blog2 from '../../assets/blog-2.png';
import blog3 from '../../assets/blog-3.jpg';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/all';
gsap.registerPlugin(ScrollTrigger);

const Blog = () => {
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
          ['#blog .section-header .heading-1', '#blog .section-header .muted'],
          { opacity: 0, y: 60 },
          {
            opacity: 1,
            y: 0,
            stagger: 0.5,
          }
        )
        .fromTo(
          '#blog .blogs-container .blog',
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
    <section id='blog' ref={container}>
      <div className='container'>
        <div className='section-header'>
          <h1 className='heading-1'>
            <span className='gradient-text'>Blogs</span>
          </h1>
          <p className='muted'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            eveniet maiores sunt corrupti temporibus cum saepe, unde officiis
            magni laborum velit? In beatae quos officia iste aperiam repudiandae
            similique totam!
          </p>
        </div>
        <div className='blogs-container'>
          {/* blog start */}
          <div className='blog'>
            <a href='' className='picture'>
              <img src={blog1} alt='' />
            </a>
            <div className='details'>
              <h3 className='title clamp-2'>
                Crafting a User-Centered Portfolio: Best Practices
              </h3>
              <p className='muted clamp-2'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Aliquid nihil eligendi porro sit repellendus. Accusantium a
                ullam impedit adipisci, reiciendis vitae, earum hic distinctio
                consequuntur eius cum expedita iusto aspernatur.
              </p>
            </div>
            <div className='buttons-wrapper'>
              <a href='#' className='btn primary'>
                Read more
              </a>
            </div>
          </div>
          {/* blog end */}

          {/* blog start */}
          <div className='blog'>
            <a href='' className='picture'>
              <img src={blog2} alt='' />
            </a>
            <div className='details'>
              <h3 className='title clamp-2'>
                Effective Case Studies: Going Beyond The Surface
              </h3>
              <p className='muted clamp-2'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Aliquid nihil eligendi porro sit repellendus. Accusantium a
                ullam impedit adipisci, reiciendis vitae, earum hic distinctio
                consequuntur eius cum expedita iusto aspernatur.
              </p>
            </div>
            <div className='buttons-wrapper'>
              <a href='#' className='btn primary'>
                Read more
              </a>
            </div>
          </div>
          {/* blog end */}

          {/* blog start */}
          <div className='blog'>
            <a href='#' className='picture'>
              <img src={blog3} alt='' />
            </a>
            <div className='details'>
              <h3 className='title clamp-2'>
                Keeping Your Portfolio Updated: A Continuous Process
              </h3>
              <p className='muted clamp-2'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Aliquid nihil eligendi porro sit repellendus. Accusantium a
                ullam impedit adipisci, reiciendis vitae, earum hic distinctio
                consequuntur eius cum expedita iusto aspernatur.
              </p>
            </div>
            <div className='buttons-wrapper'>
              <a href='#' className='btn primary'>
                Read more
              </a>
            </div>
          </div>
          {/* blog end */}
        </div>
      </div>
    </section>
  );
};

export default Blog;
