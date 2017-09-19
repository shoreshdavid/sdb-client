import * as types from '../actions/types';

const INITIAL_STATE = { 
  all:  { products: [], error: null },
  one:  { product: {}, error: null }
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    

    case types.FETCH_PRODUCT_SUCCESS:
      return {
        ...state,
        one: { product: action.payload.data, error: null }
      };


    case types.FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        all: { products: action.payload.data, error: null }
      };

    default:
      return state;
  }
}