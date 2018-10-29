import { SEARCH } from '../constants/action-types';

export const initialState = {
  searchResults: false
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH:
      return { ...state, searchResults: action.payload };
    default:
      return state;
  }
};

export default reducer;
