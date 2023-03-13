import React from "react";
import Button from "./Button";
import image1 from "../Pictures/image1.png";
import { FaArrowCircleRight } from "react-icons/fa";

const Hero1 = () => {
  return (
    <>
      <div
        className='flex flex-col bg-gray-200 py-28 md:flex-row md:space-x-4 md:justify-between md:items-center px-14'
        id='home'
      >
        <div className='flex flex-col space-y-5 items-center md:items-start'>
          <div className='text-4xl font-bold text-center'>Be safe,Be happy</div>
          <p className='text-center md:text-left md:mr-[500px]'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia quas
            sit voluptates animi quos pariatur obcaecati, a quam alias quaerat
            dignissimos quis quod voluptas eligendi quidem? Hic sed ut vero.
          </p>
          <Button>
            <span>CONTACT NOW</span>
            <span>
              <FaArrowCircleRight />
            </span>
          </Button>
        </div>
        <div>
          <img src={image1} alt='' className='text-8xl' />
        </div>
      </div>
    </>
  );
};

export default Hero1;
