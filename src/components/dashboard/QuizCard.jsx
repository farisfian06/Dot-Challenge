import React from "react";
import general from "../../assets/categories/science.png";

const QuizCard = ({ judul, kategori, jmlhSoal, gambar }) => {
  return (
    <div className="bg-white shadow-lg p-6 rounded-lg hover:shadow-xl transition-all duration-200 ease-in-out w-full">
      <div className="relative w-full max-h-[50%] bg-cover bg-center rounded-t-lg overflow-hidden bg-gradient-to-br from-secondary">
        <img src={gambar} alt={judul} className="w-full h-full object-cover" />
      </div>
      <div className="relative">
        <h3 className="text-lg font-primaryBold text-gray-800">{judul}</h3>
        <p className="text-sm text-gray-600">Kategori: {kategori}</p>
        <p className="text-sm text-gray-600">Jumlah Soal: {jmlhSoal}</p>
        <button className="mt-4 px-4 py-2 bg-primary text-white font-primaryBold rounded-md hover:bg-[#7C7DB9] transition">
          Mulai Kuis
        </button>
      </div>
    </div>
  );
};

export default QuizCard;
