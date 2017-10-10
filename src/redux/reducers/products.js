import * as types from '../actions/types';

const initialState = {
  product: {},
  products: [],
  loading: false,
  error: null,
};

export const products = (state = initialState, action) => {
  switch (action.type) {

    case types.FETCH_PRODUCT_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case types.FETCH_PRODUCT_SUCCESS:
      return {
        ...state,
        product: action.payload.data,
      };

    case types.FETCH_PRODUCT_FAILURE:
      return {
        ...state,
        error: action.payload,
      };

    // Products

    case types.FETCH_PRODUCTS_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case types.FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        products: action.payload.data,
      };

    case types.FETCH_PRODUCTS_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
  
    default:
      return state;
  }
}