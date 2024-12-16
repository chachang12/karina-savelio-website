import React, { useState } from 'react';
import placeholder from '../assets/placeholder.png';
import kalogo from '../assets/ka-logo.png';
import ContactModal from '../components/ContactModal';
import ExperienceModal from '../components/ExperienceModal';

const Hero = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [isExperienceModalOpen, setIsExperienceModalOpen] = useState(false);

  const handleOpenContactModal = () => {
    setIsContactModalOpen(true);
  };

  const handleCloseContactModal = () => {
    setIsContactModalOpen(false);
  };

  const handleOpenExperienceModal = () => {
    setIsExperienceModalOpen(true);
  };

  const handleCloseExperienceModal = () => {
    setIsExperienceModalOpen(false);
  };

  return (
    <div className='flex flex-col md:flex-row justify-center items-center gap-10 py-10 rounded-b-[50px]'>
      <div>
        <div className='mb-6 flex flex-col'>
          <h1 className='text-[40px] md:text-[50px]'>
            Hi, I'm <span className='text-sage font-[600] hover:text-mintGreen'>Karina Savelio</span>
          </h1>
          <span className='text-[30px] md:text-[40px] text-gray40 font-semibold'>
            Connecting Cultures
          </span>
          <span className='text-[30px] md:text-[40px] text-gray40 font-semibold'>
            Empowering Communication
          </span>
          <span className='text-[14px] md:text-[16px] text-gray40 font-semibold mt-4'>
            "Expert language services to help you succeed across English and Spanish."
          </span>
        </div>
        
        <div className='flex gap-4'>
          <button className='px-4 py-2 outline outline-1 outline-sage rounded-full text-sage' onClick={handleOpenContactModal}>
            Contact Me
          </button>
          <button className='px-4 py-2 outline outline-1 outline-sage rounded-full text-sage' onClick={handleOpenExperienceModal}>
            Experience
          </button>
        </div>
      </div>
      <div>
        <img src={kalogo} className='w-[200px] md:w-[300px]'/>
      </div>
      <ContactModal isOpen={isContactModalOpen} onClose={handleCloseContactModal} />
      <ExperienceModal isOpen={isExperienceModalOpen} onClose={handleCloseExperienceModal} />
    </div>
  );
};

export default Hero;