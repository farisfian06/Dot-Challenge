import React from "react";
import {
  FaUserPlus,
  FaListAlt,
  FaQuestionCircle,
  FaTrophy,
} from "react-icons/fa";
import HowItWorkCard from "../../landing/HowItWorkCard";

const howItWorkData = [
  {
    judul: "Daftar",
    deskripsi: "Buat akun Anda untuk memulai perjalanan trivia quiz.",
    icon: <FaUserPlus />,
  },
  {
    judul: "Pilih Kategori",
    deskripsi: "Temukan kategori quiz favorit Anda dan mulai bermain.",
    icon: <FaListAlt />,
  },
  {
    judul: "Jawab Quiz",
    deskripsi:
      "Jawab pertanyaan dengan cepat dan benar untuk mendapatkan poin.",
    icon: <FaQuestionCircle />,
  },
  {
    judul: "Dapatkan Poin",
    deskripsi: "Kumpulkan poin sebanyak-banyaknya dan jadilah juara!.",
    icon: <FaTrophy />,
  },
];

const HowItWork = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-primaryBold text-gray-800 mb-10">
          How It Works
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-4 justify-center gap-8">
          {howItWorkData.map((item, index) => (
            <HowItWorkCard
              key={index}
              judul={item.judul}
              deskripsi={item.deskripsi}
            >
              {item.icon}
            </HowItWorkCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWork;
