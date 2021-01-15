export const searchPath = 'https://api.themoviedb.org/3/search/movie?';
export const API_KEY = 'c28e0d3f715111a4527b2abea1d1258a';
export const BASE_URL = 'https://api.themoviedb.org/3/movie/';
const popularPath = 'https://api.themoviedb.org/3/movie/popular?';
const language = 'en-US';

export const getMovies  = function() {
  const URL = `${popularPath}api_key=${API_KEY}&language=${language}&page=1`;
  return fetch(URL)
    .then(response => response.json());
}
