import { createAction } from 'redux-actions';
export const filterResults = createAction('FILTER');
export const setPhotos = createAction('SET_RESULTS');
export const fetchFlickrImages = () => {
  return dispatch => fetch('https://api.flickr.com/services/rest/?&method=flickr.people.getPublicPhotos&format=json&api_key=6f93d9bd5fef5831ec592f0b527fdeff&user_id=9395899@N08&nojsoncallback=?', { type: 'application-json' }).then(
    facts => facts.json()
  ).then(factJson => dispatch(setPhotos(factJson)))};