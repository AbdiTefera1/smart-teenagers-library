import React from "react";
import Line from "../components/Line";
import HeroSection from "../components/HeroSection";
import FeaturedBooks from "../components/FeaturedBooks";
import UserRecommendations from "../components/UserRecommendations";

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <Line />
      <FeaturedBooks />
      <Line />
      <UserRecommendations />
    </div>
  );
};

export default HomePage;
