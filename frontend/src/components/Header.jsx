import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { searchGames } from "../services/GameData";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";

const Header = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const navigate = useNavigate();

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

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm fixed-top">
      <div className="container-fluid px-4 d-flex align-items-center justify-content-between">
        <Link to="/" className="navbar-brand fw-bold d-flex align-items-center">
          <img src="https://img.icons8.com/ios-filled/50/ffffff/controller.png" width="35" className="me-2" alt="logo" />
          Game Finder
        </Link>

        <div className="w-50 position-relative d-none d-lg-block">
          <input
            type="text"
            className="form-control rounded-pill px-4"
            placeholder="🔍 Search games..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          {searchResults.length > 0 && (
            <ul className="list-group position-absolute w-100 mt-1 shadow bg-white rounded">
              {searchResults.map((game) => (
                <li key={game?.id} className="list-group-item" onClick={() => navigate(`/game/${game?.id}`)}>
                  <img src={game?.background_image} alt={game?.name} className="me-2" width="40" />
                  {game?.name}
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="d-flex align-items-center">
          <SignedOut>
            <SignInButton mode="modal" className="btn btn-primary me-2">Sign In</SignInButton>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
          <Link to="/bookmarks" className="btn btn-outline-light ms-2">Bookmarks</Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;