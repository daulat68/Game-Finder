import "./GameCard.css";

const GameCard = ({ game }) => {
    return (
        <div className="col-md-3 mb-4">
            <div className="card game-card">
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



