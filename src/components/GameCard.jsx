import { useNavigate } from "react-router-dom";
import "./styles/GameCard.css";

const GameCard = ({ game }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/game/${game?.id}`);
    };

    return (
        <div className="col-lg-3 col-md-4 col-sm-6 col-12 d-flex mt-4" onClick={handleClick} style={{ cursor: "pointer" }}>
            <div className="card game-cards w-100"> 
                <img src={game?.background_image} alt={game?.name} className="card-img-top" />
                <div className="card-body">
                    <h5 className="card-title">{game?.name}</h5>
                    <p className="card-text">
                    <strong>Tags: </strong>
                        {game?.tags?.slice(0, 3).map(tag => tag.name).join(", ") || "No tags available"}
                    </p>
                    <p className="card-text d-flex flex-column flex-md-row justify-content-between align-items-center">
                    <span>
                    <strong>Category: </strong> {game?.genres?.slice(0, 3).map(genre => genre.name).join(", ") || "No category available"}
                    </span>
                    <span className="mt-2 mt-md-0">⭐ {game?.rating}</span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default GameCard;
