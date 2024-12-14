import React from 'react';
import TestimonialCard from '../components/TestimonialCard';

const mockTestimonials = [
  {
    text: "Karina's translation services were exceptional. She helped us bridge the communication gap with our Spanish-speaking clients.",
    name: "John Doe",
    position: "CEO, Example Corp"
  },
  {
    text: "Karina's strategic communication advice was invaluable during our company's rebranding process.",
    name: "Jane Smith",
    position: "Marketing Director, Example Inc"
  },
  {
    text: "The personalized Spanish lessons with Karina have significantly improved my language skills.",
    name: "Carlos Rodriguez",
    position: "Student"
  }
];

const Testimonials = () => {
  return (
    <div className="flex flex-col items-center my-10">
      <h2 className="text-3xl font-bold text-mintGreen mb-6">Testimonials</h2>
      <div className="flex overflow-x-auto scrollbar-hide space-x-4">
        {mockTestimonials.map((testimonial, idx) => (
          <TestimonialCard key={idx} testimonial={testimonial} />
        ))}
      </div>
    </div>
  );
};

export default Testimonials;