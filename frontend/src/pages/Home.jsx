import React from "react";
import Hero from "../components/Hero";
// import TopNiches from "../components/TopNiches";
import HowItWorks from "../components/HowItWorks";
import TopJobProfiles from "../components/TopJobProfiles";

const Home = () => {
  return (
    <>
      <Hero />
      {/* <TopNiches /> */}
      <TopJobProfiles />
      <HowItWorks />
    </>
  );
};

export default Home;
