import React, { useEffect, useState } from "react";
import { GameData } from "../services/GameData";
import GameCard from "./GameCard";
import LeftSidebar from "./LeftSidebar";
import "./styles/GameList.css";
import GameListShimmer from "./ShimmerUI/GameCardShimmer";

const GameList = () => {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [filters, setFilters] = useState({
    categories: "",
    tags: "",
    year: "",
    ordered: "",
  });

  const [sidebarOpen, setSidebarOpen] = useState(false);

  const fetchGames = async () => {
    setLoading(true);
    try {
      const data = await GameData(page, filters); // Pass filters to the API call
      setGames(data.results || []);
      setTotalPages(Math.ceil(data.count / 20)); // Assuming 20 games per page
    } catch (error) {
      console.error("Error fetching games:", error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchGames();
  }, [page, filters]);

  const handleApplyFilters = (appliedFilters) => {
    setFilters(appliedFilters);
    setPage(1); // Reset to page 1 on filter change
  };

  const handleResetFilters = (resetFilters) => {
    setFilters(resetFilters);
    setPage(1);
  };

  return (
    <div className="game-list-container container-fluid">
      <button className="btn btn-outline-secondary mb-3" onClick={() => setSidebarOpen(true)}>
        Open Filters
      </button>

      <LeftSidebar
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        onApplyFilters={handleApplyFilters}
        onResetFilters={handleResetFilters}
      />

      <div className="row justify-content-center">
        {loading ? (
          <div className="loading-text"><GameListShimmer /></div>
        ) : (
          games.map((game) => <GameCard key={game?.id} game={game} />)
        )}
      </div>

      {/* Pagination */}
      <div className="pagination">
        <button
          className="btn btn-primary"
          onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
          disabled={page === 1}
        >
          ⬅ Prev
        </button>
        <span className="page-number">
          {page} / {totalPages}
        </span>
        <button
          className="btn btn-primary"
          onClick={() => setPage((prev) => prev + 1)}
          disabled={page === totalPages}
        >
          Next ➡
        </button>
      </div>
    </div>
  );
};

export default GameList;
