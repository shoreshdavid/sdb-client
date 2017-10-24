import axios from 'axios';
import * as types from './types';
import { getData } from './index';

// fetch announcements
export function fetchAnnouncements() {
  const url = `/announcements`;

  return dispatch => getData(types.FETCH_ANNOUNCEMENTS_SUCCESS, types.FETCH_ANNOUNCEMENTS_FAILURE, url, dispatch);
}