import React, { useEffect, useState } from "react";
import AvailQuiz from "../components/sections/dashboard/AvailQuiz";
import CompleteQuiz from "../components/sections/dashboard/CompleteQuiz";
import { Link } from "react-router-dom";
import DashboardModal from "../components/dashboard/DashboardModal";

const Dashboard = () => {
  const [isContinued, setIsContinued] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem("quizData"));
    if (savedData) {
      setIsContinued(true);
      setData(savedData);
      console.log(savedData);
    }
  }, []);
  return (
    <main className=" min-h-screen">
      {isContinued && (
        <DashboardModal
          amount={data.amount}
          category={data.category}
          onClose={() => setIsContinued(false)}
        />
      )}
      <div className="container mx-auto py-10">
        <h1 className="text-4xl font-primaryBold text-gray-800 text-center mb-8">
          Dashboard
        </h1>
      </div>
      <AvailQuiz />
      <CompleteQuiz />
    </main>
  );
};

export default Dashboard;
