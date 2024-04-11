// eslint-disable-next-line no-unused-vars
import React from 'react';
import imageOne from '../resources/home1.webp'
import imageTwo from '../resources/home2.webp'
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Testimonials from '../components/Testimonials'
import Footer from '../components/Footer'
import ServicesPage from '../components/ServicesPage.jsx';
import ContactPage from '../components/ContactPage.jsx';
import Companies from '../components/Companies.jsx';
import WorkSamples from '../components/WorkSamples.jsx';

const Home = () => {
  
    // const backgroundImage = window.matchMedia('(min-width: 768px)').matches
    // ? imageOne
    // : imageTwo;

    const isLaptop = window.innerWidth > 768; 
    const containerStyles = {
        backgroundImage: isLaptop ? `url(${imageOne})` : `url(${imageTwo})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: '100vh',
      };
    
  return (
    <div>
      <div
        style={containerStyles}
      >
        <div className='bg-black bg-opacity-70 h-screen'>
          <Navbar />
        
          <Hero />
        
        </div> 
      </div>
      <About />

      <ServicesPage />
      <WorkSamples/>
      <Companies />
      <Testimonials /> 
      <ContactPage />
      <Footer />
    </div>
  );
};

export default Home;
