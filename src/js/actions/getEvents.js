import { GET_EVENTS } from '../constants/action-types';

import songkick from '../constants/songkick';

export const getEvents = (from, displayName, id) => {
  const optionalParams = {
    page: 1,
    per_page: 50
  };

  const req = songkick.getUpcomingEvents({
    from,
    id,
    optionalParams
  });

  return dispatch => {
    req.then(data => {
      dispatch({
        type: GET_EVENTS,
        data,
        displayName
      });
    });
  };
};
