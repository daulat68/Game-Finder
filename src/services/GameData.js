const API_KEY = import.meta.env.VITE_RAWG_API_KEY;
const API_URL= "https://api.rawg.io/api"

export const GameData = async (page = 1, filters = {}) => {
  let apiUrl = `${API_URL}/games?page=${page}&page_size=20&key=${API_KEY}`;

  if (filters.categories) apiUrl += `&genres=${filters.categories}`;
  if (filters.tags) apiUrl += `&tags=${filters.tags}`;
  if (filters.year) {
    apiUrl += `&dates=${filters.year}-01-01,${filters.year}-12-31`;
  }
  if (filters.ordered) apiUrl += `&ordering=${filters.ordered}`;

  try {
    const response = await fetch(apiUrl);
    if (!response.ok) throw new Error("Failed to fetch games");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching games:", error);
    return { results: [], count: 0 };
  }
};


export const searchGames = async (query) => {
    try {
      const response = await fetch(`${API_URL}/games?search=${query}&key=${API_KEY}`);
      if (!response.ok) throw new Error("Failed to fetch games");
      const data = await response.json();
      
      return data.results.slice(0, 6);
    } catch (error) {
      console.error("Error fetching search results:", error);
      return [];
    }
  };


  export const fetchGameDetails = async (id) => {
    try {
        const response = await fetch(`${API_URL}/games/${id}?key=${API_KEY}`);
        if (!response.ok) throw new Error("Failed to fetch games");
        const data= await response.json();

        const screenshotsResponse = await fetch(`https://api.rawg.io/api/games/${id}/screenshots?key=${API_KEY}`);
        if (!screenshotsResponse.ok) throw new Error("Failed to fetch screenshots");
        const screenshotsData = await screenshotsResponse.json();

        const newData= {...data, screenshots: screenshotsData?.results}

        return newData;
      } catch (error) {
        console.error("Error fetching game:", error);
        return null;
    }
};

export const fetchFilters = async (query) => {

  try{
    const response = await fetch(`${API_URL}/${query}?key=${API_KEY}`);
        if (!response.ok) throw new Error("Failed to fetch games");
        const data= await response.json();
        return data.results;
  }
  catch (error) {
    console.error("Error fetching game:", error);
    return null;

  }
}
