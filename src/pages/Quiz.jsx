import React, { useEffect, useState } from "react";
import { getAllQuestion } from "../api/service/Question";
import { decode } from "he";
import { useParams } from "react-router-dom";
import { useTimer } from "react-timer-hook";
import QuizModal from "../components/quiz/QuizModal";
import { motion } from "framer-motion";

const Quiz = () => {
  const { category, amount } = useParams();
  const [soal, setSoal] = useState([]);
  const [curIndex, setCurIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [isFinished, setIsFinished] = useState(false);
  const [correctCount, setCorrectCount] = useState(0);
  const [incorrectCount, setIncorrectCount] = useState(0);
  const [shuffledAnswers, setShuffledAnswers] = useState([]);
  const [totalAnswered, setTotalAnswered] = useState(0);
  const [error, setError] = useState("");
  const [sisaWaktu, setSisaWaktu] = useState(0);

  const time = new Date();
  const { seconds, minutes, pause, restart } = useTimer({
    expiryTimestamp: time.setSeconds(time.getSeconds() + 40),
    onExpire: () => finishQuiz(),
  });

  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem("quizData"));
    const remainingTime = parseInt(localStorage.getItem("remainingTIme"), 10);

    if (savedData && savedData.soal && savedData.soal.length > 0) {
      setSoal(savedData.soal);
      setCurIndex(savedData.curIndex || 0);
      setCorrectCount(savedData.correctCount || 0);
      setIncorrectCount(savedData.incorrectCount || 0);
      setSisaWaktu(remainingTime);
      shuffleAnswers(savedData.soal[savedData.curIndex]);

      if (remainingTime > 0) {
        const newExpiryTime = new Date();
        newExpiryTime.setSeconds(newExpiryTime.getSeconds() + remainingTime);
        restart(newExpiryTime);
      }

      setIsLoading(false);
    } else {
      fetchSoal();
    }
  }, []);

  const fetchSoal = async () => {
    try {
      const data = await getAllQuestion(category, amount);
      setSoal(data.results);
      shuffleAnswers(data.results[0]);
      setIsLoading(false);
      setError("");
    } catch (error) {
      setError(
        "An error occurred while taking the question. Please try again."
      );
    }
  };

  const saveProgress = () => {
    localStorage.setItem(
      "quizData",
      JSON.stringify({
        soal,
        curIndex,
        correctCount,
        incorrectCount,
        amount,
        category,
      })
    );
    const remainingTime = seconds + minutes * 60;
    localStorage.setItem("remainingTIme", remainingTime.toString());
  };

  const finishQuiz = () => {
    setIncorrectCount(incorrectCount + (soal.length - curIndex));
    setIsFinished(true);
    pause();
    localStorage.removeItem("quizData");
    localStorage.removeItem("remainingTIme");
    setTotalAnswered(curIndex);
  };

  const handleNextQuestion = (answer) => {
    const correctAnswer = currentQuestion.correct_answer;
    if (answer === correctAnswer) {
      setCorrectCount(correctCount + 1);
    } else {
      setIncorrectCount(incorrectCount + 1);
    }

    if (curIndex < soal.length - 1) {
      setCurIndex(curIndex + 1);
      shuffleAnswers(soal[curIndex + 1]);
    } else {
      setIsFinished(true);
      pause();
      localStorage.removeItem("quizData");
      localStorage.removeItem("remainingTIme");
      setTotalAnswered(soal.length);
    }
  };

  const shuffleAnswers = (question) => {
    const allAnswers = [...question.incorrect_answers, question.correct_answer];
    setShuffledAnswers(allAnswers.sort(() => Math.random() - 0.5));
  };

  const totalQuestions = soal.length;
  const currentQuestion = soal[curIndex];

  return (
    <main>
      <section className="h-screen flex flex-col relative">
        {isFinished && (
          <QuizModal
            correct={correctCount}
            incorrect={incorrectCount}
            totalAnswered={totalAnswered}
            totalQuestions={totalQuestions}
          />
        )}
        <div className="w-full py-4 bg-primary shadow-md">
          <div className="container flex gap-8 items-center">
            {isLoading ? (
              <>
                <div className="bg-primaryGelap text-white px-8 py-4 rounded-lg animate-pulse shadow"></div>
                <div className="animate-pulse bg-primaryGelap rounded-full px-12 py-4"></div>
              </>
            ) : (
              <>
                <h3 className="bg-primaryGelap text-white px-4 py-2 rounded-lg font-primaryBold text-xl shadow">
                  {curIndex + 1} of {totalQuestions}
                </h3>
                <h3 className="font-primaryBold text-xl text-white">
                  {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
                </h3>
              </>
            )}
          </div>
        </div>

        <div className="flex-1 container flex flex-col gap-6 px-4 py-6">
          <div className="flex-1 bg-white rounded-lg shadow-lg p-6 flex justify-center items-center">
            {isLoading ? (
              <div className="flex gap-2 animate-pulse">
                <div className="w-4 aspect-square bg-gray-600"></div>
                <div className="w-4 aspect-square bg-gray-600"></div>
                <div className="w-4 aspect-square bg-gray-600"></div>
              </div>
            ) : (
              <h1 className="text-2xl text-center font-primaryBold text-primaryGelap">
                {decode(currentQuestion.question)}
              </h1>
            )}
          </div>

          {isLoading ? (
            <div className="flex-1 grid grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="w-full bg-red-500 rounded-lg shadow-lg transition-all animate-pulse"></div>
              <div className="w-full bg-yellow-500 rounded-lg shadow-lg transition-all animate-pulse"></div>
              <div className="w-full bg-purple-500 rounded-lg shadow-lg transition-all animate-pulse"></div>
              <div className="w-full bg-blue-500 rounded-lg shadow-lg transition-all animate-pulse"></div>
            </div>
          ) : (
            <div className="flex-1 grid grid-cols-2 lg:grid-cols-4 gap-4">
              {shuffledAnswers.map((answer, idx) => (
                <motion.button
                  key={idx}
                  whileTap={{ scale: 0.9 }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2, ease: "easeInOut" }}
                  onClick={() => {
                    saveProgress();
                    handleNextQuestion(answer);
                  }}
                  className={`w-full flex justify-center items-center ${
                    idx === 0
                      ? "bg-red-500 hover:bg-red-600"
                      : idx === 1
                      ? "bg-yellow-500 hover:bg-yellow-600"
                      : idx === 2
                      ? "bg-purple-500 hover:bg-purple-600"
                      : "bg-blue-500 hover:bg-blue-600"
                  } text-white text-lg font-primaryRegular text-center rounded-lg shadow-lg`}
                >
                  {decode(answer)}
                </motion.button>
              ))}
            </div>
          )}
        </div>
        {error && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-30 flex justify-center items-center">
            <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-sm sm:max-w-md">
              <h1 className="text-lg text-center text-red-500">{error}</h1>
            </div>
          </div>
        )}
      </section>
    </main>
  );
};

export default Quiz;
