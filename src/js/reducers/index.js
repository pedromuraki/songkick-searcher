import { combineReducers } from 'redux';

import * as searchResults from './searchResults';
// import * as currentTime from './currentTime';

export const rootReducer = combineReducers({
  searchResults: searchResults.reducer
  // currentUser: currentUser.reducer,
});

export const initialState = {
  searchResults: searchResults.initialState
  // currentUser: currentUser.initialState,
};

// import {
//   ACTION_NAME,
// } from '../constants/action-types';

// const initialState = {
//   someProp: ''
// };

// const rootReducer = (state = initialState, action) => {
//   switch (action.type) {
//     // case 'ACTION_1':
//     //   return {
//     //     ...state,
//     //     someProp: action.payload
//     //   };
//     // case 'ACTION_2':
//     //   return {
//     //     ...state,
//     //     someProp: [...state.someProp, action.payload]
//     //   };
//     // case 'ACTION_3':
//     //   return {
//     //     ...state,
//     //     someProp: {...state.someProp, anoterProp: action.payload}
//     //   };
//     default:
//       return state;
//   }
// };

export default rootReducer;
