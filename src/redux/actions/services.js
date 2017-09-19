import axios from 'axios';
import * as types from './types';
import { getData } from './index';

// fetch service
export function fetchService(slug) {
  const url = `/services/${slug}`;

  return dispatch => getData(types.FETCH_SERVICE_SUCCESS, types.FETCH_SERVICE_FAILURE, url, dispatch);
}

// fetch services
export function fetchServices() {
  const url = `/services`;

  return dispatch => getData(types.FETCH_SERVICES_SUCCESS, types.FETCH_SERVICES_FAILURE, url, dispatch);
}