import React from "react";

const HowItWorkCard = ({ judul, deskripsi, children }) => {
  return (
    <div className="flex flex-col items-center w-full p-6 bg-white shadow-lg rounded-lg hover:scale-110 transition-all duration-300 ease-in-out">
      <div className="w-[35%] aspect-square flex justify-center items-center bg-primary text-white text-3xl rounded-full mb-6">
        {children}
      </div>
      <h3 className="text-xl font-primaryBold mb-2">{judul}</h3>
      <p className="text-gray-600 text-sm">{deskripsi}</p>
    </div>
  );
};

export default HowItWorkCard;
