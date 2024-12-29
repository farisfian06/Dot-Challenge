import React from "react";
import AvailQuiz from "../components/sections/dashboard/AvailQuiz";
import CompleteQuiz from "../components/sections/dashboard/CompleteQuiz";

const savedData = JSON.parse(localStorage.getItem("quizData"));
console.log(savedData);
console.log(localStorage.getItem("remainingTIme"));
// localStorage.removeItem("quizData");

const Dashboard = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto py-10">
        <h1 className="text-4xl font-primaryBold text-gray-800 text-center mb-8">
          Dashboard Anda
        </h1>
      </div>
      <AvailQuiz />
      <CompleteQuiz />
    </div>
  );
};

export default Dashboard;
