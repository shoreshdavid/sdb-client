import axios from 'axios';
import * as types from './types';
import { getData } from './index';



// fetch announcements
export const fetchAnnouncements = () => {
  const url = `${types.API_URL}/announcements`;

  return dispatch => getData(types.FETCH_ANNOUNCEMENTS_SUCCESS, types.FETCH_ANNOUNCEMENTS_FAILURE, url, dispatch);
}