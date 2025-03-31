import React from 'react';
import './About.css';
import profile_img from '../../assets/havindu.jpg';

const About = () => {
  return (
    <div id='about' className='about'>
      <div className='about-title'>
        <h1>About Me</h1>
      </div>

      <div className='about-sections'>
        <div className='about-left'>
          <img src={profile_img} alt='' />
        </div>

        <div className='about-right'>
          <div className='about-para'>
            <h1>Full Stack Developer</h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Explicabo neque aut consectetur vero inventore illo perspiciatis,
              veniam culpa asperiores praesentium? Voluptatem hic quasi ipsam
              obcaecati quaerat sunt quis, ab praesentium.
            </p>
          </div>

          <div className='about-skills'>
            <div className='about-skill'>
              <p>HTML & CSS</p>
              <hr style={{ width: '50%' }} />
            </div>
            <div className='about-skill'>
              <p>React JS</p>
              <hr style={{ width: '60%' }} />
            </div>
            <div className='about-skill'>
              <p>JavaScript</p>
              <hr style={{ width: '50%' }} />
            </div>
            <div className='about-skill'>
              <p>Next JS</p>
              <hr style={{ width: '50%' }} />
            </div>
          </div>
        </div>
        <div className='about-achievements'>
          <div className='about-achievement'>
            <h1>10+</h1>
            <p>YEARS OF EXPERIENCE</p>
          </div>
          <div className='about-achievement'>
            <h1>60+</h1>
            <p>PROJECT COMPLETED</p>
          </div>
          <div className='about-achievement'>
            <h1>10+</h1>
            <p>HAPPY CLIENTS</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
