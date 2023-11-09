import { Link } from 'react-router-dom';
import About from './About';
import Service from './Service';

const Home = () => {
  return (
    <div>
      <section className='container my-5 py-4'>
        <div className='row'>
          <div className='col-md-5 mt-5'>
            <h1 className='display-5 mb-4'>
              I'm Web Developer <br /> Yoo
            </h1>
            <p className='lead mb-4'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Laboriosam iure odio, pariatur ipsam commodi rem nesciunt error
              fugit atque facilis laudantium ea quo consequatur vitae,
              necessitatibus ullam delectus incidunt. Eligendi!
            </p>
            <Link
              className='btn btn-outline-primary me-4'
              to='/contact'
              role='button'
            >
              Get Started
            </Link>
            <Link className='btn btn-primary' to='/contact' role='button'>
              More About me
            </Link>
          </div>
          {/* For Image */}
          <div className='col-md-7 d-flex justify-content-center align-items-center'>
            <img
              className='mt-5'
              src='/assets/images/User.png'
              alt='Yoo'
              height='350px'
              width='300px'
            />
          </div>
        </div>
      </section>
      <About />
      <Service />
    </div>
  );
};

export default Home;
