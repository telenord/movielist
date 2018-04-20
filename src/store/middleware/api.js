import { getUrl } from '../../shared/moviedb';

const apiMiddleware = store => next => action => {
  console.log(action);
  let lang = 'en'|| store.getState().get('language').get('locale');

  let {url} = action.meta? action.meta: '';
  console.log(getUrl(url, {lang}));
  if (!action.meta || action.meta.type !== 'api') {
    return next(action);
  }
  // This is an api request
  //console.log(store.getState().get('language').get('locale'));
  // Find the request URL and compose request options from meta



  action.meta = {...action.meta, url: getUrl(url, {lang })}
  const fetchOptions = Object.assign({}, action.meta, );
  console.log(fetchOptions);
  // Make the request
  fetch(url, fetchOptions)
  // convert the response to json
    .then(resp => resp.json())
    .then(json => {
      if (typeof action.meta.onSuccess === 'function') {
        action.meta.onSuccess(json);
      }
      return json; // For the next promise in the chain
    })
    .then(json => {
      // respond back to the user
      // by dispatching the original action without
      // the meta object
      const newAction = {
        payload: json,
        type: action.type.replace((/init/gi), 'SUCCESS')
      };
      store.dispatch(newAction);
    })
    .catch(error=>{
      const newAction = {
        type: action.type.replace((/init/gi), 'FAIL'),
        error
      };
      store.dispatch(newAction);
    })
};

export default apiMiddleware;
