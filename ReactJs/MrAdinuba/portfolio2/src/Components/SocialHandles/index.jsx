import React from 'react';
import './SocialHandles.css';
import { FaFacebookSquare, FaInstagram, FaYoutube } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const socialHandles = [
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

const SocialHandles = () => {
  return (
    <div className='flex handles-container'>
      {socialHandles.map((handle, index) => (
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
