import { useState, useEffect } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { GameData } from "../utils/GameData";
import "./ImageSlider.css"; 

const ImageSlider = () => {
    const [games, setGames] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
   

    useEffect(() => {
        const loadGames = async () => {
            const gameData = await GameData();
            if (gameData.results) {
                setGames(gameData.results); 
            }
        };
        loadGames();
    }, []);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % games.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + games.length) % games.length);
    };

    return (
        <div className="container mt-4">
            {games.length > 0 ? (
                <div className="slider-container">
                    
                    <button className="slider-btn left-btn" onClick={prevSlide}>
                        <FiChevronLeft size={30} />
                    </button>

                    <div className="game-card">
                        <img src={games[currentIndex].background_image} alt={games[currentIndex].name} className="game-image" />
                        <h2 className="game-title">{games[currentIndex].name}</h2>
                        <div className="thumbnails">
                            {games[currentIndex].short_screenshots?.map((shot, index) => (
                                <img key={index} src={shot.image} alt={`Screenshot ${index}`} className="thumbnail" />
                            ))}
                        </div>
                        <p className="game-details">Release Date: {games[currentIndex].released}</p>
                        <p className="game-details">Rating: ⭐ {games[currentIndex].rating}</p>
                    </div>

                    <button className="slider-btn right-btn" onClick={nextSlide}>
                        <FiChevronRight size={30} />
                    </button>
                </div>
            ) : (
                <p className="text-center">Loading games...</p>
            )}
        </div>
    );
};

export default ImageSlider;
