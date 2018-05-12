import * as types from '../actions/types';

const INITIAL_STATE = { 
  services: [],
  service: {},
  error: null,
};

export const services = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    

    case types.FETCH_SERVICE_SUCCESS:
      return {
        ...state,
        service: action.payload.data,
        error: null,
      };


    case types.FETCH_SERVICES_SUCCESS:
      return {
        ...state,
        services: action.payload.data,
        error: null,
      };

    default:
      return state;
  }
}