import {
  GET_EVENT_DETAILS,
  CLEAR_EVENT_DETAILS
} from '../constants/action-types';

export const initialState = false;

export const eventDetailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_EVENT_DETAILS:
      return action.data;
    case CLEAR_EVENT_DETAILS:
      return false;
    default:
      return state;
  }
};
