import React from "react";

const Button = ({ children, className }) => {
  return (
    <button
      className={`border border-black shadow-md shadow-green-300 rounded-lg hover:ease-in duration-200 hover:bg-green-600 hover:text-white flex flex-row space-x-2 items-center px-4 py-1 ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
