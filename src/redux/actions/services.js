import { getData } from './index';
import * as types from './types';

export const fetchServices = () => {
  const url = `${types.API_URL}/services`;

  return dispatch => getData(types.FETCH_SERVICES_SUCCESS, types.FETCH_SERVICE_FAILURE, url, dispatch);
}

export const fetchService = (slug) => {
  const url = `${types.API_URL}/services/${slug}`;
  
  return dispatch => getData(types.FETCH_SERVICE_SUCCESS, types.FETCH_SERVICE_FAILURE, url, dispatch);
}