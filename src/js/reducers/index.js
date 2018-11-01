import { combineReducers } from 'redux';

import { searchResultsReducer } from './searchResultsReducer';
import { eventsReducer } from './eventsReducer';
import { eventDetailsReducer } from './eventDetailsReducer';
import { searchStatusReducer } from './searchStatusReducer';

export const rootReducer = combineReducers({
  searchResults: searchResultsReducer,
  events: eventsReducer,
  eventDetails: eventDetailsReducer,
  searchStatus: searchStatusReducer
});

export default rootReducer;
