//import React from 'react';
import content from '../resources/contentcreation1.webp'
import Digital from '../resources/DigitalMarketing1.webp'
import Social from '../resources/socialamedia1.webp'
import Graphic from '../resources/graphic.jpg'
import Strategy from '../resources/strategy.webp'
import UGC from '../resources/ugc.webp'




const ServicesPage = () => {
  const services = [
    {
      image:  content,
      title: 'Content Creation',
      description: 'Creating high-quality, engaging content for your social media platforms that align with your brand identity and goals.',
    },
    {
      image: Social,
      title: 'Social Media Management',
      description: 'Comprehensive social media management services to help businesses increase their online presence and engage with their audience.',
    },
    {
      image: Digital,
      title: 'Digital Marketing',
      description: 'Creating content for your blog, newsletter and other digital platforms that align with your brand identity and goals.',
    },
    {
      image: Graphic,
      title: 'Graphic Design',
      description: 'Elevate your brand&apos;s visual identity with captivating graphic design solutions. Whether its crafting eye-catching logos, designing stunning visuals for your social media channels, or creating cohesive branding elements, I specialize in bringing your ideas to life with creativity and precision. Lets collaborate to create designs that not only grab attention but also leave a lasting impression on your audience.',
    },
    {
      image: Strategy,
      title: 'Digital Strategy',
      description: 'In the dynamic landscape of the digital world, having a robust strategy is paramount. Let me guide you through the complexities of online platforms with a tailored approach that aligns with your goals. From content optimization to audience targeting, Ill craft a roadmap that maximizes your online presence, fosters community engagement, and drives measurable results.',
    },
    {
      image: UGC,
      title: 'UGC Content',
      description: 'Harness the power of user-generated content to amplify your brands story. From curated testimonials to interactive campaigns I specialize in creating authentic engaging content that resonates with your audience and builds strong lasting connections.',
    },
  ];

  return (
    <div className="bg-zinc-200 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-8">Services Offered</h2>
        <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-zinc-100 rounded-lg shadow-md overflow-hidden">
              <img className="w-full h-48 object-cover" src={service.image} alt={service.title} />
              <div className="p-6 flex flex-col items-center justify-center">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-700 text-center mb-4">{service.description}</p>
                <button className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;