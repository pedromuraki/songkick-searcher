import { SEARCH } from '../constants/action-types';

import songkick from '../constants/songkick';

import { searchfy, changePage } from '../helpers/index';

export const search = (by, query) => {
  changePage('/search-results');

  const optionalParams = {
    page: 1,
    per_page: 50
  };

  let req;
  let searchfiedQuery = searchfy(query);

  if (by === 'artists') {
    req = songkick.searchArtists({
      query: searchfiedQuery,
      optionalParams
    });
  }

  if (by === 'locations') {
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
