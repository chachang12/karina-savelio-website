import React from 'react';
import karinaImage from '../assets/placeholder.png'; // Replace with the actual path to the image

const About = () => {
  return (
    <div className="flex flex-col justify-center items-center">
        <span className='mx-auto text-[50px] font-semibold text-sage '>
            About Me
        </span>
        <hr className="border-b border-sage my-2 w-12 mx-auto" />
        {/* <span className='text-[16px] text-gray40 font-semibold'>
            My Passion for Linguistics
        </span> */}
        <div className='flex flex-row justify-center items-center gap-10 my-6 w-[60%]'>
            <div className="">
                <img src={karinaImage} alt="Karina Savelio" className="w-[300px] h-auto rounded-full" />
            </div>
            <div className="md:w-2/3 p-4">
                <h2 className="text-3xl font-bold text-mintGreen mb-4">Who am I?</h2>
                <p className="text-gray40">
                    I’m Karina Savelio, and I specialize in helping people connect, communicate, and succeed across languages and cultures. With a degree in Spanish Linguistics and years of experience in translation, transcription, strategic communication, and language education, I empower businesses and individuals to bridge the gap between English and Spanish.
                </p>
                <p className='text-gray40 mt-2'>
                    What truly sets me apart is my personal and practical approach. I take the time to understand your specific needs and craft tailored solutions that deliver results. Beyond my expertise, I’m driven by the joy of helping others achieve their goals and the belief that communication has the power to bring people closer together.
                </p>
            </div>
        </div>
      
    </div>
  );
};

export default About;