import React from "react";
import "../styles/GameCard.css";
// import "../styles/GameList.css";

const GameCardShimmer = () => {
  return (
    <div className="col-lg-3 col-md-4 col-sm-6 col-12 d-flex mt-4">
      <div className="card game-cards w-100 shimmer-card">
        <div className="shimmer-image"></div>
        <div className="card-body">
          <div className="shimmer-line title"></div>
          <div className="shimmer-line short"></div>
          <div className="shimmer-line short"></div>
        </div>
      </div>
    </div>
  );
};

const GameListShimmer = () => {
  const shimmerArray = Array.from({ length: 12 });

  return (
    <div className="game-list-container container-fluid">
      <div className="row justify-content-center">
        {shimmerArray.map((_, idx) => (
          <GameCardShimmer key={idx} />
        ))}
      </div>
    </div>
  );
};

export default GameListShimmer;
