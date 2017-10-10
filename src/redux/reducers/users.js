import * as types from '../actions/types';

const initialState = {
  user: {},
  users: [],
  loading: false,
  error: null,
};

export const users = (state = initialState, action) => {
  switch (action.type) {

    case types.FETCH_USER_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case types.FETCH_USER_SUCCESS:
      return {
        ...state,
        user: action.paylod,
      };

    case types.FETCH_USER_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
  
    default:
      return state;
  }
}