import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserDoctor,
  faBed,
  faHospital,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import Card from "./Card";

const Hero2 = () => {
  return (
    <div className='flex md:flex-row flex-col space-y-10 md:space-y-0 md:justify-between mx-10 my-10'>
      <Card className='py-6 px-12'>
        <div className='text-4xl'>
          <FontAwesomeIcon icon={faUserDoctor} />
        </div>
        <div className='flex justify-center text-5xl mt-[0.3em]'>120+</div>
        <p className='mt-[0.5em] font-mono'>Doctors at work</p>
      </Card>

      <Card className='py-6 px-12'>
        <div className='text-4xl'>
          <FontAwesomeIcon icon={faUser} />
        </div>
        <div className='flex justify-center text-5xl mt-[0.3em]'>1040+</div>
        <p className='mt-[0.5em] font-mono'>Happy patients</p>
      </Card>

      <Card className='py-6 px-12'>
        <div className='text-4xl'>
          <FontAwesomeIcon icon={faBed} />
        </div>
        <div className='flex justify-center text-5xl mt-[0.3em]'>500+</div>
        <p className='mt-[0.5em] font-mono'>Bed facility</p>
      </Card>
      <Card className='py-6 px-12'>
        <div className='text-4xl'>
          <FontAwesomeIcon icon={faHospital} />
        </div>
        <div className='flex justify-center text-5xl mt-[0.3em]'>80+</div>
        <p className='mt-[0.5em] font-mono'>Hospital available</p>
      </Card>
    </div>
  );
};

export default Hero2;
