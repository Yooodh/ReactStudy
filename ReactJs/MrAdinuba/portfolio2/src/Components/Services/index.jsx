import React from 'react';
import './Services.css';

const Services = () => {
  return (
    <section id='services'>
      <div className='container'>
        <div className='section-header'>
          <h1 className='heading-1'>
            <span className='gradient-text'>My Services</span>
          </h1>
          <p className='muted'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate
            pariatur sequi nesciunt cupiditate id explicabo. Dolorum
            reprehenderit at sit numquam sed, porro tempora, nemo blanditiis
            amet voluptate repellendus iure natus.
          </p>
        </div>
        <div className='services-container'>
          {/* service start */}
          <div className='flex service'>
            <div className='flex top'>
              <h1 className='muted'>0.1</h1>
              <h2 className='title'>Research and Analysis</h2>
            </div>
            <div className='middle'>
              <p className='muted'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos vel
                tempora dolore libero optio officia autem quam labore iusto est,
                quod in? Autem, ab ea tenetur sed culpa perferendis libero.
              </p>
            </div>
            <div className='bottom'>
              <a href='#' className='flex-center btn'>
                Explore projects
              </a>
            </div>
          </div>
          {/* service end */}

          {/* service start */}
          <div className='flex service'>
            <div className='flex top'>
              <h1 className='muted'>0.2</h1>
              <h2 className='title'>Wireframe</h2>
            </div>
            <div className='middle'>
              <p className='muted'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos vel
                tempora dolore libero optio officia autem quam labore iusto est,
                quod in? Autem, ab ea tenetur sed culpa perferendis libero.
              </p>
            </div>
            <div className='bottom'>
              <a href='#' className='flex-center btn'>
                Explore projects
              </a>
            </div>
          </div>
          {/* service end */}

          {/* service start */}
          <div className='flex service'>
            <div className='flex top'>
              <h1 className='muted'>0.3</h1>
              <h2 className='title'>Visual Design</h2>
            </div>
            <div className='middle'>
              <p className='muted'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos vel
                tempora dolore libero optio officia autem quam labore iusto est,
                quod in? Autem, ab ea tenetur sed culpa perferendis libero.
              </p>
            </div>
            <div className='bottom'>
              <a href='#' className='flex-center btn'>
                Explore projects
              </a>
            </div>
          </div>
          {/* service end */}

          {/* service start */}
          <div className='flex service'>
            <div className='flex top'>
              <h1 className='muted'>0.4</h1>
              <h2 className='title'>Interaction Design</h2>
            </div>
            <div className='middle'>
              <p className='muted'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos vel
                tempora dolore libero optio officia autem quam labore iusto est,
                quod in? Autem, ab ea tenetur sed culpa perferendis libero.
              </p>
            </div>
            <div className='bottom'>
              <a href='#' className='flex-center btn'>
                Explore projects
              </a>
            </div>
          </div>
          {/* service end */}

          {/* service start */}
          <div className='flex service'>
            <div className='flex top'>
              <h1 className='muted'>0.5</h1>
              <h2 className='title'>UI Development</h2>
            </div>
            <div className='middle'>
              <p className='muted'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos vel
                tempora dolore libero optio officia autem quam labore iusto est,
                quod in? Autem, ab ea tenetur sed culpa perferendis libero.
              </p>
            </div>
            <div className='bottom'>
              <a href='#' className='flex-center btn'>
                Explore projects
              </a>
            </div>
          </div>
          {/* service end */}

          {/* service start */}
          <div className='flex service'>
            <div className='flex top'>
              <h1 className='muted'>0.6</h1>
              <h2 className='title'>Usability Testing</h2>
            </div>
            <div className='middle'>
              <p className='muted'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos vel
                tempora dolore libero optio officia autem quam labore iusto est,
                quod in? Autem, ab ea tenetur sed culpa perferendis libero.
              </p>
            </div>
            <div className='bottom'>
              <a href='#' className='flex-center btn'>
                Explore projects
              </a>
            </div>
          </div>
          {/* service end */}
        </div>
      </div>
    </section>
  );
};

export default Services;
