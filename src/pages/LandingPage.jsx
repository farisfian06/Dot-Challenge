import React from "react";
import HeroSection from "../components/sections/landing/HeroSection";
import HowItWork from "../components/sections/landing/HowItWork";
import Categories from "../components/sections/landing/Categories";

const LandingPage = () => {
  return (
    <>
      <HeroSection />
      <main>
        <HowItWork />
        <Categories />;
      </main>
    </>
  );
};

export default LandingPage;
