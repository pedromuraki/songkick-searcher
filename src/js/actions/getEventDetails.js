import { GET_EVENT_DETAILS } from '../constants/action-types';

import songkick from '../constants/songkick';

export const getEventDetails = id => {
  const req = songkick.getDetails({
    from: 'events',
    id
  });

  return dispatch => {
    req.then(data => {
      dispatch({
        type: GET_EVENT_DETAILS,
        data
      });
    });
  };
};
