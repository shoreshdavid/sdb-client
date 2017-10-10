import { getData } from './index';
import * as types from './types';

export const fetchProducts = () => {
  const url = `/products`;

  return dispatch => getData(types.FETCH_PRODUCTS_SUCCESS, types.FETCH_PRODUCTS_FAILURE, url, dispatch);
}

export const fetchProduct = (slug) => {
  const url = `/products/${slug}`;
  
  return dispatch => getData(types.FETCH_PRODUCT_SUCCESS, types.FETCH_PRODUCT_FAILURE, url, dispatch);
}

// fetch all

// export const fetchProductsRequest = () => ({
//   type: types.FETCH_PRODUCTS_REQUEST,
//   loading: true,
// });

// export const fetchProductsSuccess = () => ({
//   type: types.FETCH_PRODUCTS_SUCCESS,
//   products: action.payload,
// });

// export const fetchProductsFailure = () => ({
//   type: types.FETCH_PRODUCTS_FAILURE,
//   error: action.payload,
// });

// // fetch one
// export const fetchProductRequest = () => ({

// });

// export const fetchProductSuccess = () => ({

// });

// export const fetchProductFailure = () => ({

// });

// // create
// export const createProductRequest = () => ({

// });

// export const createProductSuccess = () => ({
  
// });

// export const createProductFailure = () => ({

// });

// // update
// export const updateProductRequest = () => ({

// });

// export const updateProductSuccess = () => ({

// });

// export const updateProductFailure = () => ({

// });

// // delete
// export const deleteProductRequest = () => ({

// });

// export const deleteProductSuccess = () => ({

// });