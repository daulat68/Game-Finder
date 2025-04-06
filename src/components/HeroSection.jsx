import React from "react";
import GameList from "./GameList";
import ImageSlider from "./ImageSlider";
import "./styles/HeroSection.css"

const HeroSection = () => {

  const handleFilter = (type, value) => {
    console.log(`Filtering by ${type}: ${value}`);
    
  };

  return (
    <div className="hero-container">

      <div className="container ">
        <h2>Explore Top Games</h2>
        <div className="row">
          <div className="image-slider-wrapper">
            <ImageSlider />
          </div>
          <GameList />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
