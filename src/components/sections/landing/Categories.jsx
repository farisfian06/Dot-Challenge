import React from "react";
import CategoriesCard from "../../landing/CategoriesCard";
import scince from "../../../assets/categories/science.png";
import general from "../../../assets/categories/general.png";
import history from "../../../assets/categories/history.png";
import tech from "../../../assets/categories/tech.png";
import entertainment from "../../../assets/categories/entertain.png";
import sport from "../../../assets/categories/sport.png";

const categoriesData = [
  { name: "Pengetahuan Umum", img: general },
  { name: "Sains", img: scince },
  { name: "Sejarah", img: history },
  { name: "Teknologi", img: tech },
  { name: "Hiburan", img: entertainment },
  { name: "Olahraga", img: sport },
];

const Categories = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-primaryBold text-gray-800 mb-10">
          Kategori Quiz
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {categoriesData.map((item, index) => (
            <CategoriesCard key={index} nama={item.name} img={item.img} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
