import React from 'react';
import Navbar from '../components/Navbar';

const Home = () => {
  return (
    <div>
      <Navbar />
      <div>
        <div></div>
        <div>
          <div>
            <div>
              <h1>
                Good Living <br /> Better
                <span>Life</span>
              </h1>
              <p>Find your way to the good living with our furniture.</p>
              <div>
                <input type='text' placeholder='Office chair' />
                <button>Search</button>
              </div>
              <div>
                <span>
                  <h6>419</h6>
                  <p>Total Products</p>
                </span>
                <span>
                  <h6>102</h6>
                  <p>Crafters</p>
                </span>
                <span>
                  <h6>5k</h6>
                  <p>Relations</p>
                </span>
              </div>
            </div>
            <div>
              <div></div>
              <img src='/chair_image2.png' alt='image of a chair' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
