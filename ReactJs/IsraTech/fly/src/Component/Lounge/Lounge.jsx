import React from 'react';

// Imported Images
import imageGrid from '../../assets/images-Grid2.jpg';

const Lounge = () => {
  return (
    <div className='lounge container section'>
      <div className='sectionContainer grid'>
        <div className='imgDiv'>
          <img src={imageGrid} alt='' />
        </div>

        <div className='textDiv'>
          <h2>Unaccompained Minor Lounge</h2>

          <div className='grids grid'>
            <div className='singleGrid'>
              <span className='gridTitle'>Help through the airpot</span>
              <p>
                You can also call airlines from your phone and book a flight
                ticket to one of your favorite destinations.
              </p>
            </div>
            <div className='singleGrid'>
              <span className='gridTitle'>Priority Boarding</span>
              <p>
                You can also call airlines from your phone and book a flight
                ticket to one of your favorite destinations.
              </p>
            </div>
            <div className='singleGrid'>
              <span className='gridTitle'>Care on the flight</span>
              <p>
                You can also call airlines from your phone and book a flight
                ticket to one of your favorite destinations.
              </p>
            </div>
            <div className='singleGrid'>
              <span className='gridTitle'>Chauffeur-drive service</span>
              <p>
                You can also call airlines from your phone and book a flight
                ticket to one of your favorite destinations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lounge;
