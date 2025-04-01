import React, { useEffect } from "react";
// import GameCard from "./GameCard";

const HeroSection = ({ games }) => {
    const API_KEY= "194d1de13bf04a3fa84eedccbd36e579"

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch(`https://api.rawg.io/api/games?key=${API_KEY}`);
            const data = await response.json();
            console.log(data);
          } catch (error) {
            console.error("Error:", error);
          }
        };
    
        fetchData();
      }, []);

  return (
    <main className="hero-container d-flex flex-grow-1 p-4 bg-white">
      <h2 className="mb-3">Explore Top Games</h2>
      <div className="row">
        {/* {games.length > 0 ? (
          games.map((game) => <GameCard key={game.id} game={game} />)
        ) : (
          <p>No games found...</p>
        )} */}
      </div>
    </main>
  );
};

export default HeroSection;


