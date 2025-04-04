import React from "react";
import "./styles/LeftSidebar.css";

const LeftSidebar = ({ onFilter, isOpen, onClose }) => {
  return (
    <div className={`sidebar-overlay ${isOpen ? "open" : ""}`}>
      <div className="p-3">
      <div className="d-flex cross-btn justify-content-between align-items-center mb-3">
  <h5 className="mb-0">Filters</h5>
  <button className="btn btn-sm btn-close-red" onClick={onClose}> × </button>
</div>


        <select className="form-select mb-2" onChange={(e) => onFilter("category", e.target.value)}>
          <option value="">All Categories</option>
          <option value="Action">Action</option>
          <option value="RPG">RPG</option>
          <option value="Shooter">Shooter</option>
        </select>

        <select className="form-select mb-2" onChange={(e) => onFilter("tag", e.target.value)}>
          <option value="">All Tags</option>
          <option value="Multiplayer">Multiplayer</option>
          <option value="Singleplayer">Singleplayer</option>
          <option value="Open World">Open World</option>
        </select>

        <select className="form-select mb-2" onChange={(e) => onFilter("year", e.target.value)}>
          <option value="">All Years</option>
          <option value="2024">2024</option>
          <option value="2023">2023</option>
          <option value="2022">2022</option>
        </select>

        <select className="form-select" onChange={(e) => onFilter("popularity", e.target.value)}>
          <option value="">Any Popularity</option>
          <option value="high">High</option>
          <option value="medium">Medium</option>
          <option value="low">Low</option>
        </select>
      </div>
    </div>
  );
};

export default LeftSidebar;
