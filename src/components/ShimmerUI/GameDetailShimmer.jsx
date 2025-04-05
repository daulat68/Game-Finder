import "../styles/GameDetail.css";

const GameDetailShimmer = () => {
  return (
    <div className="game-detail-container">
      <div className="shimmer shimmer-title" />

      <div className="shimmer shimmer-image" />

      <div className="game-screenshots">
        {[1, 2, 3, 4].map((_, index) => (
          <div key={index} className="shimmer shimmer-screenshot" />
        ))}
      </div>

      <div className="game-meta">
        <div className="shimmer shimmer-meta" />
        <div className="shimmer shimmer-meta" />
        <div className="shimmer shimmer-button" />
      </div>

      <div className="shimmer shimmer-description" />
      <div className="shimmer shimmer-description" />
      <div className="shimmer shimmer-description" />

      <div className="back-button-container">
        <div className="shimmer shimmer-button-back" />
      </div>
    </div>
  );
};

export default GameDetailShimmer;
