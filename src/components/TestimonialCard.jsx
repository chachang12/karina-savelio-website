import React from 'react';

const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg w-full md:w-[300px] h-[200px] flex flex-col justify-between">
      <p className="text-gray40">{testimonial.text}</p>
      <div className="mt-4">
        <h3 className="text-lg font-bold text-black">{testimonial.name}</h3>
        <p className="text-sm text-gray40">{testimonial.position}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;