import React from 'react';
import kalogo from '../assets/ka-logo.png';
import { FaFacebook, FaInstagram, FaTiktok } from 'react-icons/fa';

const Navbar = () => {
  return (
    <div className='flex flex-col md:flex-row justify-between items-center p-4'>
      <div className='flex flex-col w-[200px]'>
        <img src={kalogo} className='w-[50px]' alt="Logo" />
      </div>

      <div className='flex flex-col md:flex-row gap-4 md:gap-8 justify-center items-center mt-4 md:mt-0'>
        <a href='#about' className='hover:text-mintGreen'>
          About
        </a>
        <a href='#services' className='hover:text-mintGreen'>
          Services
        </a>
        <a href='#testimonials' className='hover:text-mintGreen'>
          Testimonials
        </a>
        <a href='#resource-bar' className='hover:text-mintGreen'>
          Contact
        </a>
      </div>

      <div className='flex justify-end gap-4 mt-4 md:mt-0'>
        <a href='https://www.facebook.com' className='text-sage hover:text-mintGreen'>
          <FaFacebook size={24} />
        </a>
        <a href='https://www.instagram.com' className='text-sage hover:text-mintGreen'>
          <FaInstagram size={24} />
        </a>
        <a href='https://www.tiktok.com' className='text-sage hover:text-mintGreen'>
          <FaTiktok size={24} />
        </a>
      </div>
    </div>
  );
};

export default Navbar;