import { combineReducers } from 'redux';

import { searchResultsReducer } from './searchResultsReducer';
// import * as currentTime from './currentTime';

export const rootReducer = combineReducers({
  searchResults: searchResultsReducer
  // currentUser: currentUser.reducer,
});

// export const initialState = {
//   searchResults: searchResults.initialState
//   // currentUser: currentUser.initialState,
// };

export default rootReducer;
