import React from "react";

const StarsCard = ({ title, value, icon }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-5 flex flex-col items-center justify-center text-center 
      hover:shadow-lg transition-all duration-300 w-full">
      
      {/* Title */}
      <h2 className="text-base sm:text-lg md:text-xl font-medium text-gray-800">{title}</h2>

      {/* Icon */}
      <div className="text-white rounded-full p-3 sm:p-4 text-2xl sm:text-3xl bg-red-800 mt-3 mb-3 flex items-center justify-center">
        {icon}
      </div>

      {/* Value */}
      <p className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900">{value}</p>
    </div>
  );
};

export default StarsCard;
