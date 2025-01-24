import axios from "axios";

const API_KEY = "d386530cfc7d67c3de27ed047177c7d4";
const BASE_URL = "https://api.themoviedb.org/3";

export const getMovies = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/movie/popular`, {
        params: {
          api_key: API_KEY,
        },
      });
      return response.data.results;
    } catch (error) {
      console.error("Error fetching movies:", error);
      return []; // Return an empty array to prevent crashes
    }
}