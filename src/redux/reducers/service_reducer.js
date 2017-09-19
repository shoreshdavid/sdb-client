import * as types from '../actions/types';

const INITIAL_STATE = { 
  all:  { services: [], error: null },
  one:  { service: {}, error: null }
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    

    case types.FETCH_SERVICE_SUCCESS:
      return {
        ...state,
        one: { service: action.payload.data, error: null }
      };


    case types.FETCH_SERVICES_SUCCESS:
      return {
        ...state,
        all: { services: action.payload.data, error: null }
      };

    default:
      return state;
  }
}