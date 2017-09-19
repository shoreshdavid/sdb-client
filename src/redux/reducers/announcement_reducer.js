import * as types from '../actions/types';

const INITIAL_STATE = { 
  all:  { announcements: [], error: null }
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {

    case types.FETCH_ANNOUNCEMENTS_SUCCESS:
      return {
        ...state,
        all: { announcements: action.payload.data, error: null }
      };

    default:
      return state;
  }
}