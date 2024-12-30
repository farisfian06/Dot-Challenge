import React from "react";
import { Link } from "react-router-dom";

const DashboardModal = ({ category, amount, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-primary rounded-lg shadow-lg w-full max-w-md px-5 py-6">
        <h2 className="text-xl font-primaryBold text-white text-center mb-4">
          Lanjutkan Kuis Sebelumnya?
        </h2>
        <p className="text-center text-white mb-6 font-primaryRegular">
          Anda memiliki progres kuis yang belum selesai. Apakah Anda ingin
          melanjutkan?
        </p>
        <div className="flex justify-between">
          <button
            className="px-4 py-2 font-primaryRegular bg-secondary text-white rounded-lg hover:bg-red-600 hover:scale-105 hover:rotate-1 transition duration-300 shadow-lg"
            onClick={() => {
              onClose();
              localStorage.removeItem("quizData");
              localStorage.removeItem("remainingTIme");
            }}
          >
            Batal
          </button>
          <Link
            to={`/quiz/${category}/${amount}`}
            className="px-4 py-2 bg-primaryGelap font-primaryRegular text-white rounded-lg hover:bg-indigo-900 hover:scale-105 hover:-rotate-1 transition duration-300 shadow-lg"
          >
            Lanjutkan
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DashboardModal;
