import { useState } from 'react';
import Component1 from '../content_Creation/Out';
import Component2 from '../social_media/Out';
import Component3 from '../digital_media/Out';


const Samples = () => {
  const [currentComponent, setCurrentComponent] = useState(1);

  const handleComponentChange = (componentNumber) => {
    setCurrentComponent(componentNumber);
  };

  return (

    <div className="">
      <div className="flex flex-row bg-[#C46F16] pt-3 pb-6 py-2 z-10 fixed top-0 left-0 right-0">
        <button
          className={`mx-2 px-4 py-2 rounded-md ${
            currentComponent === 1 ? 'bg-pink-500 text-white' : 'bg-white text-blue-500'
          }`}
          onClick={() => handleComponentChange(1)}
        >
          Content Creation
        </button>
        <button
          className={`mx-2 px-4 py-2 rounded-md ${
            currentComponent === 2 ? 'bg-pink-500 text-white' : 'bg-white text-blue-500'
          }`}
          onClick={() => handleComponentChange(2)}
        >
          Social Media Management
        </button>
        <button
          className={`mx-2 px-4 py-2 rounded-md ${
            currentComponent === 3 ? 'bg-pink-500 text-white' : 'bg-white text-blue-500'
          }`}
          onClick={() => handleComponentChange(3)}
        >
          Digital Marketing
        </button>
      </div>

      <div className="mt-20">
        {currentComponent === 1 && (
          <div className='bg-[#C46F16] overflow-auto max-h-screen'>
            {/* Component 1 content goes here */}
            <h2 className='text-3xl font-extrabold text-gray-900 pt-3 text-center mb-8' >Work Samples</h2>
            <Component1 />
          </div>
        )}
        {currentComponent === 2 && (
          <div className='bg-[#C46F16] overflow-auto max-h-screen'>
            {/* Component 2 content goes here */}
            <h2 className='text-3xl font-extrabold text-gray-900 pt-3 text-center mb-8' >Work Samples</h2>
            <Component2 />
          </div>
        )}
        {currentComponent === 3 && (
          <div className='bg-[#C46F16] overflow-auto max-h-screen'>
            {/* Component 3 content goes here */}
            <h2 className='text-3xl font-extrabold text-gray-900 text-center pt-3 mb-8' >Work Samples</h2>
            <Component3 />
          </div>
        )}
      </div>
    </div>
  );
};

export default Samples;