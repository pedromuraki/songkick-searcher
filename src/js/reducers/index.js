import { combineReducers } from 'redux';

import { searchResultsReducer } from './searchResultsReducer';
import { eventsReducer } from './eventsReducer';
import { eventDetailsReducer } from './eventDetailsReducer';

export const rootReducer = combineReducers({
  searchResults: searchResultsReducer,
  events: eventsReducer,
  eventDetails: eventDetailsReducer
});

export default rootReducer;
