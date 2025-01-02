import React from "react";
import lepi from "../../../assets/Landing/lepi.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Circle from "../../landing/Circle";

const HeroSection = () => {
  return (
    <header>
      <section>
        <div className="container">
          <div className="flex h-screen gap-8 w-full flex-col sm:flex-row items-center justify-center">
            <div className="w-full sm:w-2/5 space-y-8 order-2">
              <motion.h1
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ margin: "-200px", once: true }}
                transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
                className="font-primaryBold text-7xl"
              >
                Trivia <br />{" "}
                <span className="text-9xl font-primaryBold">Quiz</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ margin: "-50px", once: true }}
                transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
                className="font-primaryRegular text-base"
              >
                Dive into a world of knowledge and challenge your mind with
                exciting trivia.
              </motion.p>
              <motion.button
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
              >
                <Link
                  to={"/login"}
                  className="px-6 py-3 font-primaryBold text-lg bg-primary text-white rounded-lg hover:bg-secondary transition-all duration-300 ease-in-out"
                >
                  Get Started
                </Link>
              </motion.button>
            </div>
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3, ease: "easeInOut" }}
              className="w-full sm:w-3/5 relative flex justify-center items-center sm:order-2"
            >
              <div className="w-[70%] aspect-square bg-gradient-to-br from-primary to-secondary rounded-full flex justify-center items-center">
                <img
                  src={lepi}
                  alt=""
                  className="w-[80%] object-contain"
                  draggable="false"
                />
              </div>
              <Circle className="w-24 lg:w-32 aspect-square bg-gradient-to-b from-secondary to-primary rounded-full absolute top-0 right-[2%]"></Circle>
              <Circle className="w-20 aspect-square bg-gradient-to-b from-secondary to-primary rounded-full absolute bottom-12 left-0"></Circle>
              <Circle className="w-36 lg:w-44 aspect-square bg-gradient-to-bl from-secondary to-primary rounded-full absolute -bottom-4 right-1 lg:bottom-4 lg:right-2"></Circle>
            </motion.div>
          </div>
        </div>
      </section>
    </header>
  );
};

export default HeroSection;
