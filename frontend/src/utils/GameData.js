export const GameData = async (page=1) => {
    const API_KEY = "194d1de13bf04a3fa84eedccbd36e579";
    const API_URL = `https://api.rawg.io/api/games?page=${page}&page_size=20&key=${API_KEY}`;

    try {
        const response = await fetch(API_URL);
        if (!response.ok) throw new Error("Failed to fetch games");

        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching games:", error);
        return { results: [], count: 0 };
    }
};
