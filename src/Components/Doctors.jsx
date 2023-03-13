import React from "react";
import Card from "./Card";
import freecheckup from "../Pictures/freecheckup.jpg";
import smilingDoctor from "../Pictures/smilingDoctor.jpg";
import ladyDoctor from "../Pictures/ladyDoctor.jpg";
import { FaFacebook, FaInstagramSquare } from "react-icons/fa";
import { AiFillTwitterCircle, AiFillLinkedin } from "react-icons/ai";

const Doctors = () => {
  return (
    <>
      <div className='bg-gray-200 mt-20 py-10' id='doctor'>
        <div className='text-[3em] font-serif text-center mb-10'>
          Our
          <span className='text-green-400'>Doctors</span>
        </div>
        <div className='flex flex-col space-y-10 md:space-y-0 md:flex-row'>
          <Card className='mx-10 space-y-5 px-4 py-4'>
            <img src={freecheckup} alt='' />
            <div className='text-3xl text-center'>Free checkup</div>
            <p className='text-center'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos,
              pariatur.
            </p>

            <div className='flex flex-row space-x-6'>
              <span className='text-3xl'>
                <FaFacebook />
              </span>
              <span className='text-3xl'>
                <FaInstagramSquare />
              </span>
              <span className='text-3xl'>
                <AiFillTwitterCircle />
              </span>
              <span className='text-3xl'>
                <AiFillLinkedin />
              </span>
            </div>
          </Card>
          <Card className='mx-10 space-y-5 px-4 py-4'>
            <img src={smilingDoctor} alt='' />
            <div className='text-3xl text-center'>Free checkup</div>
            <p className='text-center'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos,
              pariatur.
            </p>

            <div className='flex flex-row space-x-6'>
              <span className='text-3xl'>
                <FaFacebook />
              </span>
              <span className='text-3xl'>
                <FaInstagramSquare />
              </span>
              <span className='text-3xl'>
                <AiFillTwitterCircle />
              </span>
              <span className='text-3xl'>
                <AiFillLinkedin />
              </span>
            </div>
          </Card>
          <Card className='mx-10 space-y-5 px-4 py-4'>
            <img src={ladyDoctor} alt='' />
            <div className='text-3xl text-center'>Free checkup</div>
            <p className='text-center'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos,
              pariatur.
            </p>

            <div className='flex flex-row space-x-6'>
              <span className='text-3xl'>
                <FaFacebook />
              </span>
              <span className='text-3xl'>
                <FaInstagramSquare />
              </span>
              <span className='text-3xl'>
                <AiFillTwitterCircle />
              </span>
              <span className='text-3xl'>
                <AiFillLinkedin />
              </span>
            </div>
          </Card>
        </div>
      </div>
    </>
  );
};

export default Doctors;
