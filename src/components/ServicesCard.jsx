import React from 'react';

const ServicesCard = ({ service }) => {
  const Icon = service.image; // Use the icon component

  return (
    <div className="relative bg-white p-6 rounded-xl shadow-lg w-[300px] h-[350px] flex flex-col justify-between transition-colors duration-300 hover:bg-sage hover:bg-opacity-20">
      <div>
        <div className="w-16 h-16 mb-4 items-center justify-center flex">
          <Icon className="w-10 h-10 text-sage" />
        </div>
        <div className="mb-4">
          <h2 className="text-2xl font-bold text-black">{service.name}</h2>
          <p className="text-gray40 mt-2">{service.description}</p>
        </div>
      </div>
      <div className="relative z-10 p-4 overflow-x-auto scrollbar-hide">
        <ul className="flex space-x-2">
          {service.examples.map((example, idx) => (
            <li key={idx} className="bg-sage text-white p-2 rounded-full text-center whitespace-nowrap">
              {example}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ServicesCard;