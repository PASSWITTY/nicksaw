import { useState, useEffect } from 'react';


import one from'../resources/8.png'
import two from'../resources/9.png'
import three from '../resources/10.png'
import four from '../resources/11.png'
import five from'../resources/12.png'
import six from'../resources/13.png'
import seven from'../resources/14.png'
import eight from'../resources/15.png'
import nine from'../resources/16.png'
import ten from'../resources/17.png'
import eleven from'../resources/18.png'
import twelve from'../resources/19.png'
import thirteen from '../resources/20.png'
import fourteen from'../resources/21.png'
import fifteen from '../resources/22.png'
import sixteen from '../resources/23.png'


const Companies = () => {
  const logos = [one, two, three, four, five, six, seven, eight, nine, ten, eleven, twelve, thirteen, fourteen, fifteen, sixteen ];

  const [currentSet, setCurrentSet] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentSet((currentSet + 1) % (logos.length / 8));
        setIsTransitioning(false);
      }, 500); // Transition duration in milliseconds
    }, 5000); // Change the logo set every 5 seconds

    return () => clearInterval(interval);
  }, [currentSet, logos.length]);

  const renderLogos = () => {
    const startIndex = currentSet * 8;
    const endIndex = startIndex + 8;
    const currentLogos = logos.slice(startIndex, endIndex);

    return currentLogos.map((logo, index) => (
      <div
        key={index}
        className={`flex-none transition-opacity ${
          isTransitioning ? 'opacity-0' : 'opacity-100'
        } duration-500`}
      >
        <img
          src={logo}
          alt={`Company Logo ${startIndex + index + 1}`}
          className="mx-4 h-32"
        />
      </div>
    ));
  };

  return (
    <section className="bg-zinc-100 py-5">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative flex overflow-hidden mx-auto max-w-screen-lg">
          {renderLogos()}
        </div>
      </div>
    </section>
  );
};

export default Companies;