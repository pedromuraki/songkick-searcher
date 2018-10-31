import { GET_EVENTS, CLEAR_EVENTS } from '../constants/action-types';

export const initialState = false;

export const eventsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_EVENTS:
      return Object.assign(action.data, { displayName: action.displayName });
    case CLEAR_EVENTS:
      return false;
    default:
      return state;
  }
};
