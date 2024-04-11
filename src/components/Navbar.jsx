import  { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import logo from "../resources/logo22.png";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className=' flex justify-between w-full  opacity-70 items-center h-24 m-auto  px-1 text-black'>
     
     <Link to='/'><img src={logo} alt="logo" className='w-36 h-36 ps-5'/></Link>
       
      
      <ul className='hidden text-white md:flex'>
      <Link to="/"> <li className='p-4 font-bold'>Home</li> </Link>
        <Link to="/work-samples"> <li className='p-4  font-bold'>Work Samples</li> </Link>
        <li className='p-4 font-bold'>Contact</li>
      </ul>
      <div onClick={handleNav} className='block md:hidden'>
          {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />}
      </div>
      <ul className={nav ? 'fixed flex flex-col text-white  items-center top-0 w-[60%] h-[50vh] border-r bg-black ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
        <div className='flex '>
     <Link to='/'><img src={logo} alt="logo" className='w-36 h-36 ps-5'/></Link>
        </div>
        <Link to="/"> <li className='p-4 font-bold'>Home</li> </Link>
        <Link to="/work-samples"> <li className='p-4  font-bold'>Work Samples</li> </Link>
        <li className='p-4 font-bold'>Contact</li> 
      </ul>

    </div>
  );
};

export default Navbar;