import React, { useEffect } from "react";
import ImageSlider from "./ImageSlider";
import GameList from "./GameList";

const HeroSection = ({ games }) => {

  return (
    <main className="hero-container flex-grow-1 p-4 bg-white">
      <h2 className="mb-3">Explore Top Games</h2>
      <div className="row">
        <ImageSlider/>
        <GameList />
      </div>
    </main>
  );
};

export default HeroSection;


