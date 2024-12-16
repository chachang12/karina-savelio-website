import React from 'react';
import { FaLinkedin, FaPhone, FaEnvelope } from "react-icons/fa";

const ResourceBar = () => {
  return (
    <div className='flex flex-col items-center my-10 py-10 bg-sage w-full'>
      <div className='flex flex-col md:flex-row gap-8 md:gap-16 justify-center'>
        <div className='hover:bg-white hover:bg-opacity-10 rounded-lg'>
          <a className='flex flex-row items-center gap-1 p-2 rounded-lg' href='https://www.linkedin.com'>
            <FaLinkedin color='#FFFFFF' size={40} />
            <div className='flex flex-col bg-inherit text-whiteBF'>
              <h1>LinkedIn</h1>
              <span>Lorem ipsum</span>
            </div>
          </a>
        </div>
        <div className='hover:bg-white hover:bg-opacity-10 rounded-lg'>
          <a className='flex flex-row items-center gap-1 p-2 rounded-lg' href='https://www.linkedin.com'>
            <FaLinkedin color='#FFFFFF' size={40} />
            <div className='flex flex-col bg-inherit text-whiteBF'>
              <h1>LinkedIn</h1>
              <span>Lorem ipsum</span>
            </div>
          </a>
        </div>
        <div className='hover:bg-white hover:bg-opacity-10 rounded-lg'>
          <a className='flex flex-row items-center gap-1 p-2 rounded-lg' href='https://www.linkedin.com'>
            <FaLinkedin color='#FFFFFF' size={40} />
            <div className='flex flex-col bg-inherit text-whiteBF'>
              <h1>LinkedIn</h1>
              <span>Lorem ipsum</span>
            </div>
          </a>
        </div>
      </div>
      <div className='flex flex-col md:flex-row gap-8 md:gap-16 justify-center mt-10'>
        <div className='flex flex-row items-center gap-2 text-whiteBF'>
          <FaPhone size={20} />
          <span>+1 423-236-2330</span>
        </div>
        <div className='flex flex-row items-center gap-2 text-whiteBF'>
          <FaEnvelope size={20} />
          <span>ksavelio@southern.edu</span>
        </div>
      </div>
    </div>
  );
};

export default ResourceBar;