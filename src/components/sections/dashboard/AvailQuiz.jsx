import React from "react";
import QuizCard from "../../dashboard/QuizCard";
import history from "../../../assets/categories/history.png";
import general from "../../../assets/categories/general.png";
import technology from "../../../assets/categories/tech.png";

const availableQuizzes = [
  {
    id: 1,
    judul: "World History",
    kategori: "History",
    idCategory: 23,
    difficulty: "Medium",
    jmlhSoal: 10,
    img: history,
  },
  {
    id: 2,
    judul: "General Knowledge",
    kategori: "General Knowledge",
    idCategory: 9,
    difficulty: "Easy",
    jmlhSoal: 10,
    img: general,
  },
  {
    id: 3,
    judul: "Gadgets",
    kategori: "Technology",
    idCategory: 30,
    difficulty: "Hard",
    jmlhSoal: 10,
    img: technology,
  },
];

const AvailQuiz = () => {
  return (
    <section className="mb-12">
      <div className="container">
        <h2 className="text-2xl font-primaryBold text-gray-700 mb-6">
          Quiz Options
        </h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {availableQuizzes.map((item, index) => (
            <QuizCard
              key={index}
              judul={item.judul}
              kategori={item.kategori}
              gambar={item.img}
              jmlhSoal={item.jmlhSoal}
              idCategory={item.idCategory}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AvailQuiz;
