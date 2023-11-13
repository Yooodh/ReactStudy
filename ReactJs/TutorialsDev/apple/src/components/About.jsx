import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div>
      <div className='container py-5 my-5'>
        <div className='row'>
          <div className='col-md-6'>
            <h1 className='text-primary fw-bold mb-4'>About Us</h1>
            <p className='lead mb-4'>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae
              corrupti et exercitationem aspernatur magnam? Quia itaque id,
              dolorem alias aut eius nobis? Ipsum dicta nemo, magni distinctio
              qui perspiciatis! Atque.
            </p>
            <Link to='/contact' className='btn btn-outline-primary px-3'>
              Contact Us
            </Link>
          </div>
          <div className='col-md-6 d-flex justify-content-center'>
            <img
              src='/assets/images/about.png'
              alt='About Us'
              height='400px'
              width='400px'
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
