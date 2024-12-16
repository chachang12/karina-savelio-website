import React from 'react';
import { FaTimes } from 'react-icons/fa';

const ExperienceModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-xl shadow-lg w-[300px] relative">
        <button className="absolute top-2 right-2 text-gray40" onClick={onClose}>
          <FaTimes size={20} />
        </button>
        <div className="flex flex-col items-center">
          <p className="text-gray40 text-center">Will link to resume when she sends it to me.</p>
        </div>
      </div>
    </div>
  );
};

export default ExperienceModal;