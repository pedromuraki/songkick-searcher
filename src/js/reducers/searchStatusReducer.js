import { CHANGE_SEARCH_STATUS } from '../constants/action-types';

export const initialState = false;

export const searchStatusReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_SEARCH_STATUS:
      return action.payload;
    default:
      return state;
  }
};
