import { getData } from './index';
import * as types from './types';

export const fetchServices = () => {
  const url = `/services`;

  return dispatch => getData(types.FETCH_SERVICES_SUCCESS, types.FETCH_SERVICE_FAILURE, url, dispatch);
}

export const fetchService = (slug) => {
  const url = `/services/${slug}`;
  
  return dispatch => getData(types.FETCH_SERVICE_SUCCESS, types.FETCH_SERVICE_FAILURE, url, dispatch);
}