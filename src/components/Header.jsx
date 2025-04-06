import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { searchGames } from "../services/GameData";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";

const Header = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const navigate = useNavigate();

  // Debounced search on typing
  useEffect(() => {
    const delaySearch = setTimeout(async () => {
      if (searchTerm.length > 2) {
        const results = await searchGames(searchTerm);
        setSearchResults(results || []);
      } else {
        setSearchResults([]);
      }
    }, 300);

    return () => clearTimeout(delaySearch);
  }, [searchTerm]);

  const handleSearchReset = () => {
    setSearchTerm("");
    setSearchResults([]);
  };

  const closeNavbar = () => {
    const navbar = document.getElementById("navbarContent");
    if (navbar?.classList.contains("show")) {
      new window.bootstrap.Collapse(navbar).hide();
    }
  };

  const handleEnterKeySearch = async (e) => {
    if (e.key === "Enter" && searchTerm.length > 2) {
      const results = await searchGames(searchTerm);
      setSearchResults(results || []);
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm fixed-top">
      <div className="container-fluid px-3">
        {/* Logo */}
        <Link to="/" className="navbar-brand fw-bold d-flex align-items-center" onClick={closeNavbar}>
          <img
            src="https://img.icons8.com/ios-filled/50/ffffff/controller.png"
            width="35"
            className="me-2"
            alt=""
          />
          Game Finder
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

        
        <div className="collapse navbar-collapse" id="navbarContent">
          {/* Search Input */}
          <div className="mx-auto my-2 my-lg-0 w-100 position-relative px-lg-5">
            <div className="position-relative">
              <input
                type="text"
                className="form-control rounded-pill px-4"
                placeholder="Search games..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyDown={handleEnterKeySearch}
              />
              {searchTerm.length > 0 && (
                <button
                  type="button"
                  className="btn btn-sm position-absolute top-50 end-0 translate-middle-y me-3 fs-3 text-danger"
                  style={{
                    border: "none",
                    background: "transparent",
                    color: "#aaa",
                    fontSize: "1.2rem",
                    cursor: "pointer"
                  }}
                  onClick={handleSearchReset}
                >
                  ×
                </button>
              )}
            </div>

            {/* Search Results Dropdown */}
            {searchResults.length > 0 && (
              <ul className="list-group position-absolute w-100 mt-1 shadow bg-white rounded z-3">
                {searchResults.map((game) => (
                  <li
                    key={game?.id}
                    className="list-group-item d-flex align-items-center"
                    onClick={() => {
                      navigate(`/game/${game?.id}`);
                      handleSearchReset();
                      closeNavbar();
                    }}
                    style={{ cursor: "pointer" }}
                  >
                    <img
                      src={game?.background_image}
                      alt={game?.name}
                      className="me-2 rounded"
                      width="40"
                      height="40"
                      style={{ objectFit: "cover" }}
                    />
                    {game?.name}
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Auth & Bookmarks */}
          <div className="d-flex align-items-center mt-3 mt-lg-0 ms-lg-3">
            <SignedOut>
              <SignInButton mode="modal" className="btn btn-primary me-2">
                Sign In
              </SignInButton>
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
            <Link to="/bookmarks" className="btn btn-outline-light ms-2" onClick={closeNavbar}>
              Bookmarks
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
