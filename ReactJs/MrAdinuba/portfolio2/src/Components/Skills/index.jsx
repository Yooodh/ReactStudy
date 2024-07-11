import React from 'react';
import './Skills.css';
import figmaLogo from '../../assets/figma.png';
import sketchLogo from '../../assets/sketch.png';
import xdLogo from '../../assets/xd.png';
import photoshopLogo from '../../assets/photoshop.png';

const Skills = () => {
  return (
    <section id='skills' className='blur-effect'>
      <div className='container'>
        <div className='section-header'>
          <h1 className='heading-1 gradient-text'>My Skills</h1>
          <p className='muted'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam
            tempora rem dolorem facere a aut quis nisi maiores fugiat quam.
            Illum possimus assumenda laboriosam, fugiat deserunt maxime
            inventore. Aspernatur, quae?
          </p>
        </div>
        <div className='skills-container'>
          {/* skill start */}
          <div className='flex skill'>
            <div className='gray-scale image'>
              <img src={figmaLogo} alt='' />
            </div>
            <div className='details'>
              <h3 className='name'>Figma</h3>
              <h2 className='progress'>85%</h2>
            </div>
          </div>
          {/* skill end */}

          {/* skill start */}
          <div className='flex skill'>
            <div className='gray-scale image'>
              <img src={sketchLogo} alt='' />
            </div>
            <div className='details'>
              <h3 className='name'>Figma</h3>
              <h2 className='progress'>75%</h2>
            </div>
          </div>
          {/* skill end */}

          {/* skill start */}
          <div className='flex skill'>
            <div className='gray-scale image'>
              <img src={xdLogo} alt='' />
            </div>
            <div className='details'>
              <h3 className='name'>Adobe XD</h3>
              <h2 className='progress'>95%</h2>
            </div>
          </div>
          {/* skill end */}

          {/* skill start */}
          <div className='flex skill'>
            <div className='gray-scale image'>
              <img src={photoshopLogo} alt='' />
            </div>
            <div className='details'>
              <h3 className='name'>Photoshop</h3>
              <h2 className='progress'>70%</h2>
            </div>
          </div>
          {/* skill end */}
        </div>
      </div>
    </section>
  );
};

export default Skills;
