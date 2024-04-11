import { Link } from 'react-router-dom';
import content from '../resources/content_image.webp'
import social from '../resources/Social_Media.webp'
import digital from '../resources/Digital_Marketing.webp'

const WorkSamples = () => {
  return (
    <div className='bg-[#e4ddce]'>
      <div className="container mx-auto py-10">
        <h1 className="text-4xl md:text-5xl font-big font-bold text-center mb-10">Work Samples</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Link to="/content">
            <div className="col-span-1 cursor-pointer">
              <img src={content} alt="Content Creation" className="mx-auto shadow-grey-700 h-40 md:h-60 shadow-2xl rounded-lg" />
              <p className="text-center font-bold mt-2">Content Creation</p>
            </div>
          </Link>
          <Link to="/social">
            <div className="col-span-1 cursor-pointer">
              <img src={social} alt="Social Media Management" className="mx-auto shadow-grey-700 h-40 md:h-60 shadow-xl rounded-lg" />
              <p className="text-center font-bold mt-2">Social Media Management</p>
            </div>
          </Link>
          <Link to="/digital">
            <div className="col-span-1 cursor-pointer">
              <img src={digital} alt="Digital Marketing" className="mx-auto shadow-grey-700 shadow-xl h-40 md:h-60 rounded-lg" />
              <p className="text-center font-bold mt-2">Digital Marketing</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default WorkSamples;