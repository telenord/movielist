export const BASE_API_URL = 'https://api.themoviedb.org/3';
export const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';

export const getUrl = (category, params='language=en-US') =>{
  return `${BASE_API_URL}${category}?api_key=${process.env.REACT_APP_TMDB_API_KEY}&${params}`;
};
