import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";
import { Link } from "react-scroll";

const Header = ({ isDrawerOpen, setIsDrawerOpen }) => {
  let icon;
  if (isDrawerOpen) {
    icon = <RxCross2 />;
  } else {
    icon = <AiOutlineMenu />;
  }
  return (
    <>
      <div className='flex flex-row justify-between shadow-lg fixed top-0 bg-white w-full py-4 z-20 px-5'>
        <div className='text-xl px-[1vw] flex items-center cursor-pointer text-green-400 font-bold'>
          CARE FOR YOU
        </div>
        <div className='hidden md:block'>
          <ul className='flex space-x-[3vw] pr-14'>
            <Link
              to='home'
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              className='cursor-pointer hover:text-green-600'
            >
              Home
            </Link>
            <Link
              to='service'
              spy={true}
              smooth={true}
              offset={-150}
              duration={500}
              className='cursor-pointer hover:text-green-600'
            >
              Services
            </Link>
            <li className='cursor-pointer hover:text-green-600'>About</li>
            <Link
              to='doctor'
              spy={true}
              smooth={true}
              offset={-150}
              duration={500}
              className='cursor-pointer hover:text-green-600'
            >
              Doctors
            </Link>
            <Link
              to='booking'
              spy={true}
              smooth={true}
              offset={-150}
              duration={500}
              className='cursor-pointer hover:text-green-600'
            >
              Book
            </Link>
            <li className='cursor-pointer hover:text-green-600'>Review</li>
            <li className='cursor-pointer hover:text-green-600'>Blogs</li>
          </ul>
        </div>
        <button
          className='md:hidden text-2xl'
          onClick={() => setIsDrawerOpen((prev) => !prev)}
        >
          {icon}
        </button>
      </div>
    </>
  );
};

export default Header;
