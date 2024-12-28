import React from "react";
import lepi from "../../../assets/Landing/lepi.png";

const HeroSection = () => {
  return (
    <header>
      <section>
        <div className="container">
          <div className="flex h-screen items-center">
            <div className="w-2/5 space-y-8">
              <h1 className="font-primaryBold text-7xl">
                Trivia <br />{" "}
                <span className="text-9xl font-primaryBold">Quiz</span>
              </h1>
              <p className="font-primaryRegular text-base">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laboriosam, dignissimos?
              </p>
              <button className="px-6 py-3 font-primaryBold text-lg bg-primary text-white rounded-lg hover:bg-secondary transition-all duration-300 ease-in-out">
                Mulai Sekarang
              </button>
            </div>
            <div className="w-3/5 relative flex justify-center items-center">
              <div className="w-[70%] aspect-square bg-gradient-to-br from-primary to-secondary rounded-full flex justify-center items-center">
                <img src={lepi} alt="" className="w-[80%] object-contain" />
              </div>
              <div className="w-32 aspect-square bg-gradient-to-b from-secondary to-primary rounded-full absolute top-0 right-[2%]"></div>
              <div className="w-20 aspect-square bg-gradient-to-b from-secondary to-primary rounded-full absolute bottom-12 left-0"></div>
              <div className="w-44 aspect-square bg-gradient-to-bl from-secondary to-primary rounded-full absolute bottom-4 right-2"></div>
            </div>
          </div>
        </div>
      </section>
    </header>
  );
};

export default HeroSection;
