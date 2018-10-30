import { SEARCH } from '../constants/action-types';

export const initialState = false;

export const searchResultsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH:
      return action.payload;
    default:
      return state;
  }
};
