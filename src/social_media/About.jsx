// import React from 'react'
import image from '../resources/social_img.jpg'

const About = () => {
  return (
    <div className="bg-[#C46F16] flex flex-col-reverse md:flex-row h-auto md:h-screen">
      <div className='w-full md:w-1/2 text-white space-y-2 flex flex-col items-center justify-center gap-5 pt-8 md:pt-16 text-center px-4'>
        <h1 className='text-3xl md:text-5xl font-big mb-5'>Content Management</h1>
        <h4>
          This includes managing the scheduling and posting of content in various social media platforms such as Instagram, Facebook, X (Formerly, Twitter), Tiktok and even LinkedIn.
        </h4>
        <h1 className='text-3xl md:text-5xl font-big mb-5'>Community Management</h1>
        <h4>
          This includes replying to comments, managing the DMs and engaging with your target audience to achieve your goals.
        </h4>
        <h1 className='text-3xl md:text-5xl font-big mb-5'>Analytics and Ads</h1>
        <h4>
          This includes managing your account analytics, reporting them and using them to create better content and ads.
        </h4>
      </div>
      <div className='w-full h-screen md:w-1/2 py-8 pl-3'>
        <div className='bg-white p-8 rounded-l-3xl md:rounded-l-full h-full bg-no-repeat bg-center bg-cover md:bg-contain' style={{ backgroundImage: `url(${image})` }}>
          {/* <img src={image} alt="" className='bg-auto bg-no-repeat bg-center'/> */}
        </div>
      </div>
    </div>
  )
}

export default About