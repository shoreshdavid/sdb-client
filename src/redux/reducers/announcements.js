import * as types from '../actions/types';

const INITIAL_STATE = { 
  announcements: [], 
  error: null,
};

export const announcements = (state = INITIAL_STATE, action) => {
  switch (action.type) {

    case types.FETCH_ANNOUNCEMENTS_SUCCESS:
      return {
        ...state,
        announcements: action.payload.data,
        error: null,
      };

    default:
      return state;
  }
}