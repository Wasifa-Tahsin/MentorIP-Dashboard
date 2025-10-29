import React from 'react';

const StarsCard = ({ title, value, icon }) => {
    return (
        <div className="bg-white rounded-lg shadow p-4 flex flex-col items-center justify-center w-1/3">

             <h2 className="text-xl font-medium">{title}</h2>
      <div className="text-white rounded-full p-4 text-3xl bg-red-800 mt-2 mb-2">{icon}</div>
     
      <p className="text-2xl font-bold">{value}</p>
    </div>
    );
};

export default StarsCard;