import * as types from '../actions/types';

const INITIAL_STATE = { 
  all:  { users: [], error: null },
  one:  { user: {}, error: null }
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    

    case types.FETCH_USER_SUCCESS:
      return {
        ...state,
        one: { user: action.payload.data, error: null }
      };


    case types.FETCH_USERS_SUCCESS:
      return {
        ...state,
        all: { users: action.payload.data, error: null }
      };

    default:
      return state;
  }
}