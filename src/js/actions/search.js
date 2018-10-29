import { SEARCH } from '../constants/action-types';

import songkick from '../constants/songkick';

export const search = (by, query) => {
  const optionalParams = {
    page: 1,
    per_page: 50
  };

  let req;

  if (by === 'artist') {
    req = songkick.searchArtists({
      query,
      optionalParams
    });
  }

  if (by === 'location') {
    req = songkick.searchLocations({
      searchBy: {
        query
      },
      optionalParams
    });
  }

  return dispatch => {
    req.then(data => {
      dispatch({
        type: SEARCH,
        payload: data
      });
    });
  };
};

// export const someMiddleware = store => {
//   return next => {
//     return action => {
//       console.log('middleware');
//       console.log(action);
//       console.log(action.payload);
//       // next(action);
//     };
//   };
// };
