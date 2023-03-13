import React from "react";
import { Link } from "react-scroll";

const Sidebar = ({ isDrawerOpen, setIsDrawerOpen }) => {
  let className;
  if (isDrawerOpen) {
    className = "right-0";
  } else {
    className = "-right-72";
  }
  return (
    <div
      className={`fixed h-screen w-2/3 bg-black z-10 md:hidden text-white flex flex-col items-center text-2xl space-y-4 pt-28 transition-all duration-500 ${className}`}
    >
      <Link
        to='home'
        spy={true}
        smooth={true}
        offset={0}
        duration={500}
        className='cursor-pointer'
        onClick={() => {
          setIsDrawerOpen(false);
        }}
      >
        Home
      </Link>
      <Link
        to='service'
        spy={true}
        smooth={true}
        offset={-150}
        duration={500}
        className='cursor-pointer'
        onClick={() => {
          setIsDrawerOpen(false);
        }}
      >
        Services
      </Link>
      <span className='cursor-pointer'>About</span>
      <Link
        to='doctor'
        spy={true}
        smooth={true}
        offset={-150}
        duration={500}
        className='cursor-pointer'
        onClick={() => {
          setIsDrawerOpen(false);
        }}
      >
        Doctors
      </Link>
      <Link
        to='booking'
        spy={true}
        smooth={true}
        offset={-150}
        duration={500}
        className='cursor-pointer'
        onClick={() => {
          setIsDrawerOpen(false);
        }}
      >
        Book
      </Link>
      <span className='cursor-pointer'>Review</span>
      <span className='cursor-pointer'>Blogs</span>
    </div>
  );
};

export default Sidebar;
