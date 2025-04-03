import { useNavigate } from "react-router-dom";
import "./GameCard.css";

const GameCard = ({ game }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/game/${game.id}`);
    };

    return (
        <div className="col-lg-3 col-md-4 col-sm-6 col-12 d-flex mt-4" onClick={handleClick} style={{ cursor: "pointer" }}>
            <div className="card game-cards w-100"> 
                <img src={game.background_image} alt={game.name} className="card-img-top" />
                <div className="card-body">
                    <h5 className="card-title">{game.name}</h5>
                    <p className="card-text">⭐ {game.rating} | 🗓 {game.released}</p>
                </div>
            </div>
        </div>
    );
};

export default GameCard;
