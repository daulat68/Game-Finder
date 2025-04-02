import { useState, useEffect } from "react";
import { GameData } from "../utils/GameData";
import GameCard from "./GameCard";
import "./GameList.css";

const GameList = () => {
    const [games, setGames] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    useEffect(() => {
        const loadGames = async () => {
            const data = await GameData(currentPage);
            if (data.results) {
                setGames(data.results);
                setTotalPages(Math.ceil(data.count / 20));
            }
        };
        loadGames();
    }, [currentPage]);

    return (
        <div className="container">
            <div className="row">
                {games.length > 0 ? (
                    games.map((game) => <GameCard key={game.id} game={game} />)
                ) : (
                    <p className="loading-text text-center">Loading games...</p>
                )}
            </div>

            <div className="pagination d-flex justify-content-center mt-3">
                <button 
                    className="btn btn-primary me-2" 
                    onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                    disabled={currentPage === 1}
                >
                    Previous
                </button>

                <span className="align-self-center">Page {currentPage} of {totalPages}</span>

                <button 
                    className="btn btn-primary ms-2" 
                    onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                    disabled={currentPage === totalPages}
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default GameList;

