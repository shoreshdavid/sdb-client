import * as types from '../actions/types';

const INITIAL_STATE = { 
  all:  { posts: [], error: null },
  one:  { post: {}, error: null }
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    

    case types.FETCH_POST_SUCCESS:
      return {
        ...state,
        one: { post: action.payload.data, error: null }
      };


    case types.FETCH_POSTS_SUCCESS:
      return {
        ...state,
        all: { posts: action.payload.data, error: null }
      };

    default:
      return state;
  }
}