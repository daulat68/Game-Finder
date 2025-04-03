import { useState, useEffect } from "react";
import GameCard from "./GameCard";
import "./Bookmark.css";

const Bookmark = () => {
    const [bookmarks, setBookmarks] = useState([]);

    
    return (
        <div className="container mt-5">
            <h2 className="text-center">Bookmarked Games</h2>
            {bookmarks.length > 0 ? (
                <div className="row">
                    {bookmarks.map((game) => (
                        <div key={game.id} className="col-md-3">
                            <GameCard game={game} />
                            <button className="btn btn-danger mt-2" >Remove</button>
                        </div>
                    ))}
                </div>
            ) : (
                <p className="text-center">No bookmarks yet.</p>
            )}
        </div>
    );
};

export default Bookmark;
