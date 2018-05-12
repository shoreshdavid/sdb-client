import * as types from '../actions/types';

const initialState = {
  auth: false,
  loading: false,
};

export const auth = (state = initialState, action) => {
  switch (action.type) {
    case types.AUTH_USER_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case types.AUTH_USER_SUCCESS:
      return {
        ...state,
        auth: true,
      };

    case types.AUTH_USER_FAILURE:
      return {
        ...state,
      };

    default:
      return state;
  }
};
