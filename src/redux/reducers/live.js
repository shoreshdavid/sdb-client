import * as types from '../actions/types';

const INITIAL_STATE = {
  video: {},
  loading: false,
  error: null,
};

export const live = (state = INITIAL_STATE, action) => {
  switch (action.type) {

    case types.FETCH_LIVE_VIDEO_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case types.FETCH_LIVE_VIDEO_SUCCESS:
      return {
        ...state,
        loading: false,
        video: action.payload.data,
      };

    case types.FETCH_LIVE_VIDEO_FAILURE:
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
};
