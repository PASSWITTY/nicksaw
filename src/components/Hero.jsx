//import React from 'react';

const Hero = () => {
  return (
    <div className="flex items-center justify-center h-full">
      <div className='flex flex-col items-center justify-center text-center'>
        <h1 className="text-3xl  font-extrabold  sm:text-5xl lg:text-6xl text-white mb-2">NICOLE WANJALA</h1>
        <h2 className="text-xs sm:text-sm lg:text-base text-white mb-4">CONTENT CREATOR AND SOCIAL MEDIA MANAGER</h2>
        <button className=" text-xs sm:text-sm lg:text-base text-{{ sm:text-white lg:text-black }} text-black font-bold py-3 px-6 rounded-lg border border-white shadow-lg hover:bg-pink-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-opacity-50 transition duration-300">
          BOOK A CONSULTATION
        </button>
      </div>
    </div>
  );
};

export default Hero;
