export const BASE_API_URL = 'https://api.themoviedb.org/3';
export const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';


export const getUrl = (category, params = {}  ) => {
  console.log('params1', params);
  params.lang = params.lang ? params.lang : 'ru';
  console.log('params2', params);
  // let  arr = Object.keys(params).map(param=>{
  //   return param = params[param];
  // })
  //console.log(arr);
  const url = `${BASE_API_URL}${category}?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=${params.lang}`;
  return params ? `${url}&${params}` : url;
};
