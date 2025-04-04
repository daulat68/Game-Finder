import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import GameCard from "./GameCard";
import { SignedIn, SignedOut, SignInButton } from "@clerk/clerk-react"
import { loadBookmarksForUser, removeBookmark, saveBookmarksForUser } from "./store/bookmarkSlice";
import "./styles/Bookmark.css";
import { useUser } from "@clerk/clerk-react";

const Bookmark = () => {
    
    const { user } = useUser();
    const dispatch = useDispatch();
    const bookmarks = useSelector((state) => state.bookmarks);

    useEffect(() => {
        if (user) {
          dispatch(loadBookmarksForUser(user.id));
        }
      }, [user, dispatch]);

    const handleRemove = (id) => {
        dispatch(removeBookmark(id));
    };
   
    return (
        <div className="container">
            <h2 className="text-center">Bookmarked Games</h2>
            
            <SignedOut>
                <div className="text-center mt-4">
                    <p>You need to sign in to view your bookmarks.</p>
                    <SignInButton mode="modal" className="btn btn-primary">
                        Sign In
                    </SignInButton>
                </div>
            </SignedOut>

            <SignedIn>
            {bookmarks.length > 0 ? (
                <div className="row">
                    {bookmarks.map((game) => (
                        <div key={game?.id} className="col-md-3">
                            <GameCard game={game} />
                            <button className="btn btn-danger mt-2" onClick={() => handleRemove(game.id)} >Remove</button>
                        </div>
                    ))}
                </div>
            ) : (
                <p className="text-center">No bookmarks yet.</p>
            )}
            </SignedIn>
        </div>
    );
};

export default Bookmark;
