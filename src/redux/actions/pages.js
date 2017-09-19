import axios from 'axios';
import * as types from './types';
import { getData } from './index';


// fetch page
export function fetchPage(slug) {
  const url = `/pages/${slug}`;

  return dispatch => getData(types.FETCH_PAGE_SUCCESS, types.FETCH_PAGE_FAILURE, url, dispatch);
}