import React from "react";

const Header = ({ onSearch }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm fixed-top">
      <div className="container-fluid px-4">

        {/* 🎮 Logo */}
        <a className="navbar-brand fw-bold d-flex align-items-center" href="#">
          <img src="https://img.icons8.com/ios-filled/50/ffffff/controller.png" 
               alt="logo" 
               width="35" 
               className="me-2"/>
          GameList
        </a>

        {/* Mobile Toggle Button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
          aria-controls="navbarContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Content */}
        <div className="collapse navbar-collapse justify-content-center" id="navbarContent">
          {/* 🔍 Search Bar */}
          <div className="d-flex w-50">
            <input
              type="text"
              className="form-control rounded-pill px-4 search-input"
              placeholder="🔍 Search games..."
              onChange={(e) => onSearch(e.target.value)}
            />
          </div>
        </div>

        {/* 📌 Bookmark Button */}
        <div className="d-none d-lg-block">
          <button className="btn btn-primary rounded-pill px-4 fw-bold bookmark-btn">
            📌 Library
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Header;




