import React from 'react';
import Navbar from './components/Navbar';
import Hero from './sections/Hero.section';
import ResourceBar from './components/ResourceBar';
import Services from './sections/Services.section';
import About from './sections/About.section';
import Testimonials from './sections/Testimonials.section';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <div className='flex flex-col justify-center'>
        <section className='p-4'>
          <Navbar />  
        </section>
        <div id="hero" className='py-10 rounded-b-xl'>
          <Hero />
        </div>
        
        <div id="resource-bar" className='flex justify-center'>
          <ResourceBar />
        </div>

        <section id="about" className='mb-10'>
          <About />
        </section>

        <section id="services" className='mb-10'>
          <Services />
        </section>

        <hr className="border-t border-gray-300 my-4 w-full mx-auto" />

        <section id="testimonials" className='mb-10'>
          <Testimonials />
        </section>

        <Footer />
      </div>
    </>
  );
}

export default App;