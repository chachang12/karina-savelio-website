import React from 'react';
import kalogo from '../assets/ka-logo.png';

const Footer = () => {
  return (
    <footer className="bg-gray40 text-white p-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start md:items-center">
        <div className="flex flex-col items-center md:items-start mr-8">
          <img src={kalogo} alt="Karina Savelio Logo" className="w-16 h-16 mb-2" />
          <h2 className="text-xl font-bold">Karina Savelio</h2>
          <p className="text-sm">Connecting Cultures, Empowering Communication</p>
        </div>
        <div className="flex flex-col items-center md:items-end mt-4 md:mt-0 md:ml-auto">
          <h3 className="text-lg font-semibold">Navigation</h3>
          <a href="#about" className="hover:text-mintGreen">About</a>
          <a href="#services" className="hover:text-mintGreen">Services</a>
          <a href="#experience" className="hover:text-mintGreen">Experience</a>
          <a href="#references" className="hover:text-mintGreen">References</a>
        </div>
      </div>
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center mt-4">
        <p className="text-sm">&copy; {new Date().getFullYear()} Karina Savelio. All rights reserved.</p>
        <p>Email: ksavelio@southern.edu</p>
          <p>Phone: +1 423-236-2330</p>
        <span className="text-sm">Woman and Latina Owned</span>
      </div>
    </footer>
  );
};

export default Footer;