import { combineReducers } from 'redux';

import { searchResultsReducer } from './searchResultsReducer';
import { eventsReducer } from './eventsReducer';

export const rootReducer = combineReducers({
  searchResults: searchResultsReducer,
  events: eventsReducer
});

export default rootReducer;
