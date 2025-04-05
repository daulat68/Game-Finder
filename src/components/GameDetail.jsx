import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addBookmark, removeBookmark, saveBookmarksForUser, loadBookmarksForUser} from "./store/bookmarkSlice";
import { useEffect, useState } from "react";
import { fetchGameDetails } from "../services/GameData"; 
import { useUser } from "@clerk/clerk-react";
import "./styles/GameDetail.css";
import GameDetailShimmer from "./ShimmerUI/GameDetailShimmer";

const GameDetail = () => {
    const dispatch = useDispatch();
    const { user } = useUser();
    const bookmarks = useSelector(state => state.bookmarks);

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
    }, [id]);

    useEffect(() => {
        if (user) {
          dispatch(loadBookmarksForUser(user.id));
        }
      }, [user, dispatch]);
      

    const isBookmarked = game && bookmarks.some(g => g.id === game.id);

    const handleBookmarkToggle = () => {
    if (!user) return;

    if (isBookmarked) {
      dispatch(removeBookmark(game.id));
      saveBookmarksForUser(user.id, bookmarks.filter(g => g.id !== game.id));
    } else {
      dispatch(addBookmark(game));
      saveBookmarksForUser(user.id, [...bookmarks, game]);
    }
  };

    if (loading) {
        return <div className="mt-5"><GameDetailShimmer/></div>;
    }

    if (!game) {
        return <p className="mt-5">Game not found.</p>;
    }

    const pcPlatform = game?.platforms?.find(p => p.platform?.name === "PC");
    const minimumReq = pcPlatform?.requirements?.minimum || "Not available";
    const recommendedReq = pcPlatform?.requirements?.recommended || "Not available";

    return (
        <div className="game-detail-container">
            <h2>{game?.name}</h2>
            <img 
                src={game?.background_image || game?.background_image_additional}
                alt="Game visual"
                className="game-detail-image" 
            />

            <div className="game-screenshots">
                {game?.screenshots?.map((shot, index) => (
                    <img 
                        key={index} 
                        src={shot.image} 
                        alt={`Screenshot ${index}`} 
                        className="game-screenshot" 
                    />
                ))}
            </div>

            <div className="game-meta">
                <p className="game-detail-info"><strong>Released:</strong> {game?.released}</p>
                <p className="game-detail-info"><strong>Rating:</strong> ⭐ {game?.rating}</p>
                {user ? (<button 
                    className={`btn ${isBookmarked ? "btn-danger" : "btn-primary"} px-4 py-2 rounded-pill`} 
                    onClick={handleBookmarkToggle}>
                    {isBookmarked ? "Remove Bookmark" : "Add Bookmark"}
                </button>) : (
                    <p className="mt-3 text-danger"><strong>Please sign in to bookmark </strong></p>
                )}
            </div>

            <p className="game-detail-description">
                <strong>Description:</strong> {game?.description_raw || "No description available."}
            </p>

            <p className="game-detail-description">
                <strong>Minimum Requirements:</strong> {minimumReq}
            </p>
            <p className="game-detail-description">
                <strong>Recommended Requirements:</strong> {recommendedReq}
            </p>

            <div className="back-button-container">
            <button className="back-button" onClick={() => navigate(-1)}>Back</button>
            </div>
        </div>
    );
};

export default GameDetail;
