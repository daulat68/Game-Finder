import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { SignedIn, SignedOut, SignInButton } from "@clerk/clerk-react"
import { loadBookmarksForUser, removeBookmark, saveBookmarksForUser } from "./store/bookmarkSlice";
import "./styles/Bookmark.css";
import { useUser } from "@clerk/clerk-react";


const Bookmark = () => {
    const { user } = useUser();
    const dispatch = useDispatch();
    const bookmarks = useSelector((state) => state.bookmarks);
    const navigate = useNavigate();

    useEffect(() =>{
        if (user) {
          dispatch(loadBookmarksForUser(user.id));
        }
      }, [user, dispatch]);

    const handleRemove = (id) => {
        dispatch(removeBookmark(id));
        const updatedBookmarks = bookmarks.filter((game) => game.id !== id);
    
        if(user){
            saveBookmarksForUser(user.id, updatedBookmarks);
        } 
    };

    const handleGamePage = (gameId)=> {
      navigate(`/game/${gameId}`);
    }
   
    return (
        <div className="bookmark-section">
  <h2 className="bookmark-heading">Bookmarked Games</h2>

  <SignedOut>
    <div className="text-center mt-5">
      <p className="mb-3">You need to sign in to view your bookmarks.</p>
      <SignInButton mode="modal" className="btn btn-primary">
        Sign In
      </SignInButton>
    </div>
  </SignedOut>

  <SignedIn>
    {bookmarks.length > 0 ? (
      <div className="bookmark-container">
      {bookmarks.map((game) => (
        <div key={game.id} className="bookmark-card-wrapper d-flex align-items-start gap-3 shadow-sm p-3 position-relative"
        onClick={() => handleGamePage(game.id)}>
          
          <div style={{ position: 'relative'}}>
            <img
              src={game.background_image}
              alt={game.name}
              className="rounded"
              style={{
                width: "120px",
                height: "120px",
                objectFit: "cover",
                flexShrink: 0
              }}
            />
            <button
              className="btn btn-danger btn-sm remove-on-image"
              onClick={(e) =>{
                e.stopPropagation();
                handleRemove(game.id)}}
            >
              Remove
            </button>
          </div>
    
          {/* Game Info */}
          <div className="flex-grow-1">
            <h5 className="mb-2">{game.name}</h5>
            <p className="mb-1">
              <strong>Genres:</strong> {game.genres?.map(g => g.name).join(", ")}
            </p>
            <p className="mb-1 tags-text">
              <strong>Tags:</strong>{" "}
              {game.tags?.slice(0, 6).map(t => t.name).join(", ")}
            </p>
            <p className="mb-0">
              <strong>⭐ Rating:</strong> {game.rating}
            </p>
          </div>
        </div>
      ))}
    </div>
    
    ) : (
      <div className="text-center mt-4">
        <p>No bookmarks yet.</p>
      </div>
    )}
  </SignedIn>
</div>

    );
};

export default Bookmark;
