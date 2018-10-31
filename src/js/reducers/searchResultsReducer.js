import { SEARCH, CLEAR_RESULTS } from '../constants/action-types';

export const initialState = false;

export const searchResultsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH:
      return Object.assign(action.data, { activeQuery: action.query });
    case CLEAR_RESULTS:
      return false;
    default:
      return state;
  }
};
