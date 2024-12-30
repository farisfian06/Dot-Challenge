import React from "react";

const completedQuizzes = [
  { id: 1, title: "Entertainment", score: 85, date: "2024-12-27" },
  { id: 2, title: "Science", score: 90, date: "2024-12-25" },
];
const CompleteQuiz = () => {
  return (
    <section>
      <div className="container">
        <h2 className="text-2xl font-primaryBold text-gray-700 mb-6">
          Completed Quiz
        </h2>
        {completedQuizzes.length > 0 ? (
          <div className="overflow-x-auto bg-white shadow-lg rounded-lg">
            <table className="w-full table-auto">
              <thead className="bg-primary text-white">
                <tr>
                  <th className="px-6 py-3 text-left">Title</th>
                  <th className="px-6 py-3 text-left">Score</th>
                  <th className="px-6 py-3 text-left">Date</th>
                </tr>
              </thead>
              <tbody>
                {completedQuizzes.map((quiz) => (
                  <tr key={quiz.id} className="hover:bg-gray-50">
                    <td className="px-6 py-3">{quiz.title}</td>
                    <td className="px-6 py-3">{quiz.score}</td>
                    <td className="px-6 py-3">{quiz.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p className="text-gray-600">Belum ada kuis yang diselesaikan.</p>
        )}
      </div>
    </section>
  );
};

export default CompleteQuiz;
