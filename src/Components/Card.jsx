import React from "react";

const Card = ({ children, className }) => {
  return (
    <div
      className={`bg-white border-2 border-green-600 rounded-lg shadow-lg shadow-green-300 flex flex-col items-center ${className}`}
    >
      {children}
    </div>
  );
};

export default Card;
