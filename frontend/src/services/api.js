const API_KEY = "8be49de34294ed75a31d0d3b70d6dc41";
const BASE_URL = "https://api.themoviedb.org/3";

const fetchMovies = async (endpoint) => {
  const response = await fetch(`${BASE_URL}${endpoint}&api_key=${API_KEY}`);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(
      data.status_message || `TMDB request failed (${response.status})`
    );
  }

  if (!Array.isArray(data.results)) {
    throw new Error("TMDB returned an unexpected response.");
  }

  return data.results;
};

export const getPopularMovies = async () => fetchMovies("/movie/popular?");

export const searchMovies = async (query) => {
  return fetchMovies(`/search/movie?query=${encodeURIComponent(query)}`);
};
