import { SEARCH } from '../constants/action-types';

export const initialState = false;

export const searchResultsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH:
      return Object.assign(action.data, { activeQuery: action.query });
    default:
      return state;
  }
};
