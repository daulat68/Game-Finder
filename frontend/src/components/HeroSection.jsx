import React, { useState } from "react";
import LeftSidebar from "./LeftSidebar";
import GameList from "./GameList";
import ImageSlider from "./ImageSlider";
import { FiFilter } from "react-icons/fi";
import "./styles/HeroSection.css"

const HeroSection = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  const handleFilter = (type, value) => {
    console.log(`Filtering by ${type}: ${value}`);
    
  };

  return (
    <div className="hero-container">
      <button className="filter-toggle-btn" onClick={() => setShowSidebar(true)}>
        <FiFilter size={20} style={{ marginRight: "4px" }} />
        Filters
      </button>

      <LeftSidebar isOpen={showSidebar} onClose={() => setShowSidebar(false)} onFilter={handleFilter} />

      <div className="container mt-3">
        <h2>Explore Top Games</h2>
        <div className="row">
          <ImageSlider />
          <GameList />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
