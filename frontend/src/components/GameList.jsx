import React, { useEffect, useState } from "react";
import { GameData } from "../services/GameData";
import GameCard from "./GameCard";
import "./styles/GameList.css";

const GameList = () => {
    const [games, setGames] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    useEffect(() => {
        const fetchGames = async () => {
            setLoading(true);
            try {
                const data = await GameData(page);
                setGames(data.results || []);
                setTotalPages(Math.ceil(data.count / 20)); // 20 games per page
            } catch (error) {
                console.error("Error fetching games:", error);
            }
            setLoading(false);
        };

        fetchGames();
    }, [page]);

    return (
        <div className="game-list-container container-fluid">
            <div className="row justify-content-center">
                {loading ? (
                    <p className="loading-text">Loading games...</p>
                ) : (
                    games.map((game) => <GameCard key={game?.id} game={game} />)
                )}
            </div>

            {/*  Pagination Controls */}
            <div className="pagination">
                <button 
                    className="btn btn-primary"
                    onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
                    disabled={page === 1}
                >
                    ⬅ Prev
                </button>
                <span className="page-number">{page} / {totalPages}</span>
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
