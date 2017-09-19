import axios from 'axios';
import * as types from './types';
import { getData } from './index';

// fetch product
export function fetchProduct(slug) {
  const url = `/products/${slug}`;

  return dispatch => getData(types.FETCH_PRODUCT_SUCCESS, types.FETCH_PRODUCT_FAILURE, url, dispatch);
}

// fetch products
export function fetchProducts() {
  const url = `/products`;

  return dispatch => getData(types.FETCH_PRODUCTS_SUCCESS, types.FETCH_PRODUCTS_FAILURE, url, dispatch);
}