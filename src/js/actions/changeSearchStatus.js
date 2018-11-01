import { CHANGE_SEARCH_STATUS } from '../constants/action-types';

export const changeSearchStatus = bool => {
  return {
    type: CHANGE_SEARCH_STATUS,
    payload: bool
  };
};
