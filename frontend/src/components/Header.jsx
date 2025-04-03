import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { searchGames } from "../utils/GameData";

const Header = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const navigate = useNavigate();

  // Debounce API Call
  useEffect(() => {
    const delaySearch = setTimeout(async () => {
      if (searchTerm.length > 2) {
        const results = await searchGames(searchTerm);
        setSearchResults(results || []);
      } else {
        setSearchResults([]);
      }
    }, 300); 

    return () => clearTimeout(delaySearch); // Cleanup timeout on new keystroke
  }, [searchTerm]);

  const handleSearchClick = (gameId) => {
    setSearchTerm("");
    setSearchResults([]);
    navigate(`/game/${gameId}`);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm fixed-top">
      <div className="container-fluid px-4">

        {/* Logo */}
        <Link to="/" className="navbar-brand fw-bold d-flex align-items-center">
          <img src="https://img.icons8.com/ios-filled/50/ffffff/controller.png" 
               alt="logo" 
               width="35" 
               className="me-2"/>
          GameList
        </Link>

        {/* Hamburger Menu */}
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

        <div className="collapse navbar-collapse justify-content-center" id="navbarContent">
          <div className="position-relative w-50">
            <input
              type="text"
              className="form-control rounded-pill px-4 search-input"
              placeholder="🔍 Search games..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />

            {/* Search Dropdown */}
            {searchResults.length > 0 && (
              <ul className="list-group position-absolute w-100 mt-1 shadow bg-white rounded">
                {searchResults.map((game) => (
                  <li key={game.id} 
                      className="list-group-item d-flex align-items-center"
                      style={{ cursor: "pointer" }}
                      onClick={() => handleSearchClick(game.id)}>
                    <img src={game.background_image} alt={game.name} className="me-2" width="40"/>
                    {game.name}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        <div className="d-none d-lg-block">
          <Link to="/bookmarks" className="btn btn-primary rounded-pill px-4 fw-bold">
            Bookmarks
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;





