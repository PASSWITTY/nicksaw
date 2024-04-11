// import React from 'react'
import content from '../resources/content3.webp'
import social from '../resources/analytics.webp'
import digital from '../resources/analytics.webp'
import image1 from '../resources/digital1.webp'
import image2 from '../resources/digital_email_marketing.webp'
import image3 from '../resources/Digital_Landing_Page.webp'

const Digital = () => {
  return (
    <div className='bg-[#e8e8e8] pb-5'>
      <div className="container mx-auto py-10">
        <h1 className="text-3xl font-extrabold text-gray-900 text-center mb-8">Digital Marketing</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="col-span-1">
            <img src={content} alt="Content Creation" className="mx-auto shadow-grey-700 w-full h-auto md:h-60 shadow-2xl rounded-lg" />
            <p className="text-center font-bold mt-2">Blog Posts</p>
          </div>
          <div className="col-span-1">
            <img src={social} alt="Social Media Management" className="mx-auto shadow-grey-700 w-full h-auto md:h-60 shadow-xl rounded-lg" />
            <p className="text-center font-bold mt-2">E-mail Newsletters</p>
          </div>
          <div className="col-span-1">
            <img src={digital} alt="Digital Marketing" className="mx-auto shadow-grey-700 w-full h-auto md:h-60 shadow-xl rounded-lg" />
            <p className="text-center font-bold mt-2">Landing Pages</p>
          </div>
        </div>
      </div>
      <div className='bg-[#f0ebe1]'>
        <h1 className="text-3xl md:text-4xl pt-4 font-big font-bold text-center mb-10">Blog Posts</h1>
        <div className='flex flex-col md:flex-row'>
          <div className='w-full md:w-1/2'>
            <img src={image1} alt=" " className='w-auto h-64 md:h-96 mx-auto' />
          </div>
          <div className='flex flex-col mx-auto pt-8 md:pt-24'>
            <h2 className='font-big text-xl md:text-2xl font-semibold'>Client:</h2>
            <h2 className='font-big my-4 md:my-9 text-xl md:text-2xl font-semibold'>Goal:</h2>
            <h2 className='font-big text-xl md:text-2xl font-semibold'>Creative Process:</h2>
          </div>
        </div>
      </div>
      <div className='bg-[#f0ebe1]'>
        <h1 className="text-3xl md:text-4xl pt-4 font-big font-bold text-center mb-10">E-Mail Newsletters</h1>
        <div className='flex flex-col md:flex-row'>
          <div className='w-full md:w-1/2 flex items-center justify-center'>
            <img src={image2} alt=" " className='h-64 md:h-[430px] w-auto' />
          </div>
          <div className='flex flex-col mx-auto pt-8 md:pt-24'>
            <h2 className='font-big text-xl md:text-2xl font-semibold'>Client:</h2>
            <h2 className='font-big my-4 md:my-9 text-xl md:text-2xl font-semibold'>Goal:</h2>
            <h2 className='font-big text-xl md:text-2xl font-semibold'>Creative Process:</h2>
          </div>
        </div>
      </div>
      <div className='bg-[#f0ebe1]'>
        <h1 className="text-3xl md:text-4xl pt-4 font-big font-bold text-center mb-10">Landing Pages</h1>
        <div className='flex flex-col md:flex-row'>
          <div className='w-full md:w-1/2 flex items-center justify-center'>
            <img src={image3} alt=" " className='h-64 md:h-[430px] w-auto' />
          </div>
          <div className='flex flex-col mx-auto pt-8 md:pt-24'>
            <h2 className='font-big text-xl md:text-2xl font-semibold'>Client:</h2>
            <h2 className='font-big my-4 md:my-9 text-xl md:text-2xl font-semibold'>Goal:</h2>
            <h2 className='font-big text-xl md:text-2xl font-semibold'>Creative Process:</h2>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Digital