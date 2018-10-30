import { SEARCH } from '../constants/action-types';

import songkick from '../constants/songkick';

import { searchfy } from '../helpers/index';

export const search = (by, query) => {
  const optionalParams = {
    page: 1,
    per_page: 50
  };

  let req;
  let searchfiedQuery = searchfy(query);

  if (by === 'artist') {
    req = songkick.searchArtists({
      query: searchfiedQuery,
      optionalParams
    });
  }

  if (by === 'location') {
    req = songkick.searchLocations({
      searchBy: {
        query: searchfiedQuery
      },
      optionalParams
    });
  }

  return dispatch => {
    req.then(data => {
      dispatch({
        type: SEARCH,
        data,
        query
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
