import React from "react";
import { MdOutlineMedicalServices } from "react-icons/md";
import { FaArrowCircleRight, FaAmbulance } from "react-icons/fa";
import { BsHeartPulseFill } from "react-icons/bs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserDoctor, faStethoscope } from "@fortawesome/free-solid-svg-icons";
import Card from "./Card";
import Button from "./Button";

const Services = () => {
  return (
    <>
      <div className='bg-gray-200' id='service'>
        <div className='text-center text-[3rem] pb-[2vh] font-serif'>
          Our <span className='text-green-400 ml-[2vw]'>Services</span>
        </div>
        <div className='flex flex-col space-y-10 md:space-y-0 px-10 md:flex-row md:space-x-10 md:justify-around '>
          {/* Card1 */}
          <Card className='space-y-4 py-10 px-5'>
            <MdOutlineMedicalServices className='text-4xl' />
            <p className='text-center'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos,
              pariatur.
            </p>
            <Button>
              <span>CONTACT NOW</span>
              <span>
                <FaArrowCircleRight />
              </span>
            </Button>
          </Card>
          {/* Card2 */}
          <Card className='space-y-4 py-10 px-5'>
            <FaAmbulance className='text-4xl' />
            <p className='text-center'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos,
              pariatur.
            </p>
            <Button>
              <span>CONTACT NOW</span>
              <span>
                <FaArrowCircleRight />
              </span>
            </Button>
          </Card>
          {/* Card3 */}
          <Card className='space-y-4 py-10 px-5'>
            <FontAwesomeIcon icon={faUserDoctor} className='text-4xl' />
            <p className='text-center'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos,
              pariatur.
            </p>
            <Button>
              <span>CONTACT NOW</span>
              <span>
                <FaArrowCircleRight />
              </span>
            </Button>
          </Card>
          {/* Card4 */}
          <Card className='space-y-4 py-10 px-5'>
            <FontAwesomeIcon icon={faStethoscope} className='text-4xl' />
            <p className='text-center'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos,
              pariatur.
            </p>
            <Button>
              <span>CONTACT NOW</span>
              <span>
                <FaArrowCircleRight />
              </span>
            </Button>
          </Card>
          {/* Card5 */}
          <Card className='space-y-4 py-10 px-5'>
            <BsHeartPulseFill className='text-4xl' />
            <p className='text-center'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos,
              pariatur.
            </p>
            <Button>
              <span>CONTACT NOW</span>
              <span>
                <FaArrowCircleRight />
              </span>
            </Button>
          </Card>
        </div>
      </div>
    </>
  );
};

export default Services;
