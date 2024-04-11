//import React from 'react'
import Carousel from '../components/Carousel'
import image1 from '../resources/content_creation/seven.png'
import image2 from '../resources/content_creation/eight.png'
import image3 from '../resources/content_creation/nine.png'
import image4 from '../resources/18.png'
import image5 from '../resources/9.png'
import image6 from '../resources/8.png'

const Community = () => {

    const imageUrls = [
        image2,
        image3
      ];
    

  return (
    <div className='bg-[#f0ebe1]'>
      <h2 className="text-2xl md:text-3xl pt-4 font-extrabold text-gray-900 text-center mb-8">Communities Based Business</h2>
      <div className='flex flex-col md:flex-row'>
        <div className='w-full md:w-1/2'>
          <img src={image1} alt=" " className='h-auto w-full' />
        </div>
        <div className='flex flex-col mx-auto pt-8 md:pt-24'>
          <h2 className='font-big text-xl md:text-2xl font-semibold'>Client:</h2>
          <h2 className='font-big my-4 md:my-9 text-xl md:text-2xl font-semibold'>Goal:</h2>
          <h2 className='font-big text-xl mb-4 md:mb-9 md:text-2xl font-semibold'>Creative Process:</h2>
          <h2 className='font-big text-xl md:text-2xl font-semibold'>Client Feedback:</h2>
        </div>
      </div>
      
      <Carousel images={imageUrls} />

      <div className='bg-[#c5d2c4]'>
        <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-8">Similar Businessess</h2>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 p-8 md:p-16'>
          <div className='bg-white shadow-xl border-2'>
            <img src={image4} alt='' className='w-full' />
          </div>
          <div className='bg-white mx-auto shadow-xl border-2'>
            <img src={image5} alt='' className='w-full' />
          </div>
          <div className='bg-white shadow-xl border-2'>
            <img src={image6} alt='' className='w-full' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Community