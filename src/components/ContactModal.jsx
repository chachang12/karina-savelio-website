import React from 'react';
import { FaPhone, FaLinkedin, FaEnvelope, FaTimes } from 'react-icons/fa';
import placeholder from '../assets/placeholder.png';

const ContactModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-xl shadow-lg w-[300px] relative">
        <button className="absolute top-2 right-2 text-gray40" onClick={onClose}>
          <FaTimes size={20} />
        </button>
        <div className="flex flex-col items-center">
          <img src={placeholder} alt="Karina Savelio" className="w-24 h-24 rounded-full mb-4" />
          <h2 className="text-xl font-bold text-black">Karina Savelio</h2>
          <p className="text-sm text-gray40">Southern Adventist University</p>
          <p className="text-sm text-gray40 mb-4">Journalism and Communication</p>
          <div className="flex flex-col items-center">
            <a href="mailto:ksavelio@southern.edu" className="flex items-center gap-2 text-sage mb-2">
              <FaEnvelope size={20} />
              <span>ksavelio@southern.edu</span>
            </a>
            <div className='flex items-center gap-2 text-sage mb-2'>
                <FaPhone size={20} />
                <span>+1 423-236-2330</span>
            </div>
            <a href="https://www.linkedin.com" className="flex items-center gap-2 text-sage">
              <FaLinkedin size={20} />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactModal;