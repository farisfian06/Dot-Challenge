import React from "react";
import { Link } from "react-router-dom";

const CategoriesCard = ({ img, nama }) => {
  return (
    <div
      className={`relative group w-full h-48 rounded-lg shadow-lg bg-gradient-to-br from-primary to-gray-100 overflow-hidden`}
    >
      <img src={img} alt="" className="w-full absolute inset-0" />
      <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-40 transition duration-300"></div>
      <h3 className="absolute inset-x-0 bottom-6 text-white text-xl font-primaryBold group-hover:scale-110 transition duration-300">
        {nama}
      </h3>
      <button className="absolute inset-x-0 bottom-3 text-white text-sm opacity-0 group-hover:opacity-100 group-hover:translate-y-1 transition duration-300">
        <Link to={"/dashboard"}>See Quiz</Link>
      </button>
    </div>
  );
};

export default CategoriesCard;
