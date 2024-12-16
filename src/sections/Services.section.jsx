import React from 'react';
import ServicesCard from '../components/ServicesCard';
import mockServices from '../data/mockData';

const Services = () => {
  // Split services into business and personal categories
  const businessServices = mockServices.filter(service => service.category === 'business');
  const personalServices = mockServices.filter(service => service.category === 'personal');

  return (
    <div className="flex flex-col items-center">
      <div className="relative w-full text-center my-6">
        <hr className="border-t border-gray-300 w-full absolute top-1/2 transform -translate-y-1/2" />
        <span className='relative z-10 bg-gray40 text-white py-2 rounded-full text-center whitespace-nowrap px-6 text-[14px]'>
          Business Services
        </span>
      </div>
      <div className='flex flex-wrap gap-4 justify-center'>
        {businessServices.map((service, idx) => (
          <ServicesCard key={idx} service={service} index={idx} />
        ))}
      </div>

      <div className="relative w-full text-center my-6">
        <hr className="border-t border-gray-300 w-full absolute top-1/2 transform -translate-y-1/2" />
        <span className='relative z-10 bg-gray40 text-white py-2 rounded-full text-center whitespace-nowrap px-6 text-[14px]'>
          Personal Services
        </span>
      </div>
      <div className='flex flex-wrap gap-4 justify-center'>
        {personalServices.map((service, idx) => (
          <ServicesCard key={idx} service={service} index={idx} />
        ))}
      </div>
    </div>
  );
};

export default Services;