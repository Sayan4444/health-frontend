import React, { useState } from "react";
import booking from "../Pictures/booking.png";
import { FaArrowCircleRight } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Button from "./Button";

const Book = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    date: "",
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const uploadData = async () => {
    try {
      toast.loading("Loading...");
      const response = await fetch("http://localhost:5000", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      toast.dismiss();
      if (response?.status !== 200) {
        toast.error("Something went wrong!");
      } else {
        toast.success("Booking successful!");
      }
      const data = await response.json();
      console.log(data);
    } catch (error) {
      toast.dismiss();
      toast.error("Something went wrong!");
      console.log(error.message);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    uploadData();
  };

  return (
    <div className='md:mx-10' id='booking'>
      <div className='text-center text-[3rem] pb-[2vh] font-serif'>
        Book <span className='text-green-400 ml-[2vw]'>Now</span>
      </div>
      <div className='flex flex-col space-y-7 md:flex-row md:space-y-0 md:space-x-4 md:mt-14 md:items-center'>
        <img src={booking} alt='' className='mx-10' />
        <div className='text-center border border-black shadow-lg shadow-green-300 rounded-md mx-10 py-10 px-4'>
          <form onSubmit={handleSubmit}>
            <h1 className='pb-[1em] text-4xl'>Book appointment</h1>
            <input
              type='text'
              name='name'
              placeholder='your name'
              className='w-[90%] mx-[1em] border border-black rounded-md my-[1em] py-2 pl-3'
              value={formData.name}
              onChange={handleChange}
            ></input>
            <input
              type='text'
              name='phone'
              placeholder='your phone number'
              value={formData.phone}
              onChange={handleChange}
              className='w-[90%] mx-[1em] border border-black rounded-md my-[1em] py-2 pl-3'
            ></input>
            <input
              type='text'
              name='email'
              placeholder='your email'
              value={formData.email}
              onChange={handleChange}
              className='w-[90%] mx-[1em] border border-black rounded-md my-[1em] py-2 pl-3'
            ></input>
            <input
              type='date'
              name='date'
              value={formData.date}
              onChange={handleChange}
              className='w-[90%] mx-[1em] border border-black rounded-md my-[1em] py-2 pl-3'
            ></input>
            <Button type='submit' className='mx-auto mt-4'>
              <span>BOOK NOW</span>
              <span>
                <FaArrowCircleRight />
              </span>
            </Button>
          </form>
        </div>
      </div>
      <ToastContainer
        limit={2}
        position='top-right'
        autoClose={2000}
        hideProgressBar={true}
        newestOnTop={true}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss={false}
        draggable={false}
        pauseOnHover={false}
        theme='light'
      />
    </div>
  );
};

export default Book;
