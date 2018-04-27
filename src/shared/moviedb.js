export const BASE_API_URL = 'https://api.themoviedb.org/3';
export const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';

const buildParamString = params =>{
  return Object.keys(params).map(param=>{
    return `&${param}=${params[param]}`
  }).join('')
}

export const getUrl = (category, params = {}  ) => {
  const url = `${BASE_API_URL}${category}?api_key=${process.env.REACT_APP_TMDB_API_KEY}`;
  return params ? `${url}${buildParamString(params)}` : url;
};
