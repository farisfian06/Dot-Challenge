import React from "react";
import lepi from "../../../assets/Landing/lepi.png";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <header>
      <section>
        <div className="container">
          <div className="flex h-screen gap-8 w-full flex-col sm:flex-row items-center justify-center">
            <div className="w-full sm:w-2/5 space-y-8 order-2">
              <h1 className="font-primaryBold text-7xl">
                Trivia <br />{" "}
                <span className="text-9xl font-primaryBold">Quiz</span>
              </h1>
              <p className="font-primaryRegular text-base">
                Dive into a world of knowledge and challenge your mind with
                exciting trivia.
              </p>
              <button>
                <Link
                  to={"/login"}
                  className="px-6 py-3 font-primaryBold text-lg bg-primary text-white rounded-lg hover:bg-secondary transition-all duration-300 ease-in-out"
                >
                  Get Started
                </Link>
              </button>
            </div>
            <div className="w-full sm:w-3/5 relative flex justify-center items-center sm:order-2">
              <div className="w-[70%] aspect-square bg-gradient-to-br from-primary to-secondary rounded-full flex justify-center items-center">
                <img src={lepi} alt="" className="w-[80%] object-contain" />
              </div>
              <div className="w-24 lg:w-32 aspect-square bg-gradient-to-b from-secondary to-primary rounded-full absolute top-0 right-[2%]"></div>
              <div className="w-20 aspect-square bg-gradient-to-b from-secondary to-primary rounded-full absolute bottom-12 left-0"></div>
              <div className="w-36 lg:w-44 aspect-square bg-gradient-to-bl from-secondary to-primary rounded-full absolute -bottom-4 right-1 lg:bottom-4 lg:right-2"></div>
            </div>
          </div>
        </div>
      </section>
    </header>
  );
};

export default HeroSection;
