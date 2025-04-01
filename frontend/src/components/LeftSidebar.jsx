import React from "react";

const LeftSidebar = ({ onFilter }) => {
  return (
    <aside className="left-sidebar bg-light vh-100 p-3" style={{ width: "250px" }}>
      <h5>Filters</h5>
      
      {/* Category Filter */}
      <select className="form-select mb-2" onChange={(e) => onFilter("category", e.target.value)}>
        <option value="">All Categories</option>
        <option value="Action">Action</option>
        <option value="RPG">RPG</option>
        <option value="Shooter">Shooter</option>
      </select>

      {/* Tags Filter */}
      <select className="form-select mb-2" onChange={(e) => onFilter("tag", e.target.value)}>
        <option value="">All Tags</option>
        <option value="Multiplayer">Multiplayer</option>
        <option value="Singleplayer">Singleplayer</option>
        <option value="Open World">Open World</option>
      </select>

      {/* Release Year Filter */}
      <select className="form-select mb-2" onChange={(e) => onFilter("year", e.target.value)}>
        <option value="">All Years</option>
        <option value="2024">2024</option>
        <option value="2023">2023</option>
        <option value="2022">2022</option>
      </select>

      {/* Popularity Filter */}
      <select className="form-select" onChange={(e) => onFilter("popularity", e.target.value)}>
        <option value="">Any Popularity</option>
        <option value="high">High</option>
        <option value="medium">Medium</option>
        <option value="low">Low</option>
      </select>
    </aside>
  );
};

export default LeftSidebar;


