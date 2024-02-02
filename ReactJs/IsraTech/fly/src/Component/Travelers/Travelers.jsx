import React from 'react';

// Imported Images
import paris from '../../assets/paris.jpg';
import dubai from '../../assets/dubai.jpg';
import newyork from '../../assets/newyork.jpg';
import london from '../../assets/london.jpg';

// Imported Traveler Images
import traveler1 from '../../assets/user(1).jpg';
import traveler2 from '../../assets/user(2).jpg';
import traveler3 from '../../assets/user(3).jpg';
import traveler4 from '../../assets/user(4).jpg';

const travelers = [
  {
    id: 1,
    destinationImage: paris,
    travelerImage: traveler1,
    travelerName: 'Yoo',
    socialLink: '@david',
  },
  {
    id: 2,
    destinationImage: dubai,
    travelerImage: traveler2,
    travelerName: 'Nicole Web',
    socialLink: '@nicoleweb',
  },
  {
    id: 3,
    destinationImage: newyork,
    travelerImage: traveler3,
    travelerName: 'Wilson Lindsey',
    socialLink: '@wilsonlindsey',
  },
  {
    id: 4,
    destinationImage: london,
    travelerImage: traveler4,
    travelerName: 'Naresh Lamer',
    socialLink: '@nareshlamer',
  },
];

const Travelers = () => {
  return (
    <div className='travelers container section'>
      <div className='sectionContainer'>
        <h2>Top travelers of this month!</h2>

        <div className='travelersContainer grid'>
          {travelers.map(
            ({
              id,
              destinationImage,
              travelerImage,
              travelerName,
              socialLink,
            }) => {
              return (
                /* single passanger card */
                <div key={id} className='singleTraveler'>
                  <img src={destinationImage} className='destinationImage' />
                  <div className='travelerDetails'>
                    <div className='travelerPicture'>
                      <img src={travelerImage} className='travelerImage' />
                    </div>
                    <div className='travelerName'>
                      <span>{travelerName}</span>
                      <p>{socialLink}</p>
                    </div>
                  </div>
                </div>
              );
            }
          )}
        </div>
      </div>
    </div>
  );
};

export default Travelers;
