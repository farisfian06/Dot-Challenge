import React from "react";
import { Link } from "react-router-dom";

const QuizModal = ({ correct, incorrect, totalAnswered, totalQuestions }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-30 flex justify-center items-center">
      <div className="bg-white rounded-lg shadow-lg p-6 max-w-md">
        <h1 className="text-2xl font-bold text-primaryGelap text-center">
          Quiz Completed!
        </h1>
        <p className="text-lg mt-4 text-center">
          Correct Answer:{" "}
          <span className="text-green-500 font-primaryBold">{correct}</span>
        </p>
        <p className="text-lg text-center">
          Wrong Answer:{" "}
          <span className="text-red-500 font-primaryBold">{incorrect}</span>
        </p>
        <p className="text-lg text-center">
          Answered Question:{" "}
          <span className="text-red-500 font-primaryBold">{totalAnswered}</span>
        </p>
        <p className="text-lg mt-2 text-center">
          Total Score:{" "}
          <span className="text-blue-500 font-primaryBold">
            {(correct / totalQuestions) * 100}
          </span>
        </p>
        <div className="flex justify-center mt-6">
          <button>
            <Link
              to={"/dashboard"}
              className="px-6 py-2 font-primaryBold bg-primary text-white rounded-lg hover:bg-primaryGelap transition duration-300"
            >
              Finish
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuizModal;
