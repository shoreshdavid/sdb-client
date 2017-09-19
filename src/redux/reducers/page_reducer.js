import * as types from '../actions/types';

const INITIAL_STATE = { 
  one:  { page: {}, error: null }
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {

    case types.FETCH_PAGE_SUCCESS:
      return {
        ...state,
        one: { page: action.payload, error: null }
      };

    default:
      return state;
  }
}