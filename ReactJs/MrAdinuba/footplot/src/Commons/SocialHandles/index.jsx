import React from 'react';
import './SocialHandles.css';
import { FaInstagram, FaXTwitter, FaYoutube } from 'react-icons/fa6';
import { FaFacebookSquare } from 'react-icons/fa';

const SocialHandles = () => {
  const data = [
    {
      name: 'Instagram',
      icon: <FaInstagram />,
      link: '#',
    },
    {
      name: 'Facebook',
      icon: <FaFacebookSquare />,
      link: '#',
    },
    {
      name: 'Twitter',
      icon: <FaXTwitter />,
      link: '#',
    },
    {
      name: 'Youtube',
      icon: <FaYoutube />,
      link: '#',
    },
  ];

  return (
    <div
      className='handles-container'
      data-aos='fade-right'
      data-aos-delay='1200'
    >
      {data.map((handle, index) => (
        <a
          href={handle.link}
          target='_blank'
          className='flex-center icon-wrapper'
          key={index}
        >
          {handle.icon}
        </a>
      ))}
    </div>
  );
};

export default SocialHandles;
