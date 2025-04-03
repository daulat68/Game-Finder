import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchGameDetails } from "../utils/GameData"; 
import "./GameDetail.css";

const GameDetail = () => {
    const { id } = useParams();
    const [game, setGame] = useState(null);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchGame = async () => {
            setLoading(true);
            try {
                const gameData = await fetchGameDetails(id); 
                setGame(gameData);
            } catch (error) {
                console.error("Error fetching game details:", error);
            }
            setLoading(false);
        };

        fetchGame();
    }, [id]); // Runs when id changes

    if (loading) {
        return <p className="mt-5">Loading game details...</p>;
    }

    if (!game) {
        return <p className="mt-5">Game not found.</p>;
    }

    return (
        <div className="game-detail-container">
            <h2>{game.name}</h2>
            <img src={game.background_image} alt={game.name} className="game-detail-image" />
            <p className="game-detail-info"><strong>Released:</strong> {game.released}</p>
            <p className="game-detail-info"><strong>Rating:</strong> ⭐ {game.rating}</p>
            <p className="game-detail-description">{game.description_raw || "No description available."}</p>
            <button className="back-button" onClick={() => navigate(-1)}>Back</button>
        </div>
    );
};

export default GameDetail;
