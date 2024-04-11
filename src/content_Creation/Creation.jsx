//import React from 'react'
import product from '../resources/content_creation/product.jpg'
import service from '../resources/content_creation/service.jpg'
import community from '../resources/content_creation/community.webp'

const Creation = () => {

    

  return (
    <div>
      <div className='bg-[#e4ddce]'>
        <div className="container mx-auto py-10">
          <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-8">Content Creation</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <div className="col-span-1 cursor-pointer hover:scale-105 transition duration-300 ease-in-out">
              <img src={product} alt="Content Creation" className="mx-auto shadow-grey-700 w-40 sm:w-48 md:w-60 h-40 sm:h-48 md:h-60 shadow-2xl rounded-lg" />
              <p className="text-center font-bold mt-2">Product Based Business</p>
            </div>
            <div className="col-span-1 cursor-pointer hover:scale-105 transition duration-300 ease-in-out">
              <img src={service} alt="Social Media Management" className="mx-auto w-40 sm:w-48 md:w-60 h-40 sm:h-48 md:h-60 shadow-grey-700 shadow-xl rounded-lg" />
              <p className="text-center font-bold mt-2">Service Based Business</p>
            </div>
            <div className="col-span-1 cursor-pointer hover:scale-105 transition duration-300 ease-in-out">
              <img src={community} alt="Digital Marketing" className="mx-auto w-40 sm:w-48 md:w-60 h-40 sm:h-48 md:h-60 shadow-grey-700 shadow-xl rounded-lg" />
              <p className="text-center font-bold mt-2">Communities</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Creation;